terraform {
  required_version = "1.2.7"
  backend "s3" {
    key            = "website/state.tfstate"
    bucket         = "737032216196-terraform-state" 
    dynamodb_table = "737032216196-terraform-lock"  
    region         = "eu-west-1"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.29.0"
    }
  }
}

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

provider "aws" {
  region              = "eu-west-1"
  allowed_account_ids = ["737032216196"] 
}

locals {
  name_prefix        = "website"
  root_domain        = "carlsmestad.com"
  current_account_id = data.aws_caller_identity.current.id
  current_region     = data.aws_region.current.name
  domains = {
    root = "carlsmestad.com"
    www = "www.carlsmestad.com"
    sub = "*.carlsmestad.com"
  }
  tags = {
    project   = local.name_prefix
    terraform = true
  }
}

resource "aws_budgets_budget" "this" {
  name              = "${local.name_prefix}-monthly"
  budget_type       = "COST"
  limit_amount      = "50"
  limit_unit        = "USD"
  time_period_end   = "2087-06-15_00:00"
  time_period_start = "2017-07-01_00:00"
  time_unit         = "MONTHLY"

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 100
    threshold_type             = "PERCENTAGE"
    notification_type          = "FORECASTED"
    subscriber_email_addresses = ["carl.smestad+dev@gmail.com"] 
  }
}

resource "aws_s3_bucket" "website" {
  bucket = "${local.name_prefix}-${local.current_account_id}-website"
  versioning {
    enabled = true
  }
  force_destroy = true
  website {
    index_document = "index.html"
    error_document = "index.html"
  }

}

data "aws_iam_policy_document" "s3_access" {
  statement {
    actions   = ["s3:PutObject", "s3:PutObjectAcl", "s3:GetObject", "s3:ListBucket", "s3:DeleteObject"]
    resources = [aws_s3_bucket.website.arn, "${aws_s3_bucket.website.arn}/*"]
    principals {
      type        = "AWS"
      identifiers = ["arn:aws:iam::737032216196:role/website-github-actions"]
    }
  }
  statement {
    actions   = ["s3:GetObject"]
    resources = [aws_s3_bucket.website.arn, "${aws_s3_bucket.website.arn}/*"]
    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.this.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "this" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.s3_access.json
}

resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

resource "aws_iam_role" "github_actions" {
  name               = "${local.name_prefix}-github-actions"
  assume_role_policy = data.aws_iam_policy_document.github_assume.json
  tags               = local.tags
}

data "aws_iam_policy_document" "github_assume" {
  statement {
    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }
    effect = "Allow"
    actions = [
      "sts:AssumeRoleWithWebIdentity"
    ]
    condition {
      test     = "ForAllValues:StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values = ["repo:CarlOfHoly/smestadcom:*"]
    }
    condition {
      test     = "ForAllValues:StringLike"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }
  }
}

resource "aws_cloudfront_origin_access_identity" "this" {
  comment = "${local.name_prefix} - origin access identity for s3/cloudfront"
}

data "aws_route53_zone" "this" {
  name = "${local.root_domain}."
}

provider "aws" {
  region = "us-east-1"
  alias = "certificate_region"
}

data "aws_acm_certificate" "certificate" {
  domain   = "${local.root_domain}"
  provider = aws.certificate_region
  statuses = ["ISSUED"]
}

resource "aws_cloudfront_distribution" "this" {
  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = aws_cloudfront_origin_access_identity.this.id
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.this.cloudfront_access_identity_path
    }
  }
  enabled             = true
  is_ipv6_enabled     = false
  default_root_object = "index.html"
  aliases             = ["*.${data.aws_route53_zone.this.name}", "www.${data.awe_route53_zone.this.name}"]
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }
  default_cache_behavior {
    allowed_methods = [
      "GET",
      "HEAD",
    ]
    cached_methods = [
      "GET",
      "HEAD",
    ]
    target_origin_id = aws_cloudfront_origin_access_identity.this.id
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 604800
  }
  price_class = "PriceClass_100"
  viewer_certificate {
    acm_certificate_arn      = data.aws_acm_certificate.certificate.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
  # viewer_certificate {
  #   cloudfront_default_certificate = true
  # }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

resource "aws_route53_record" "website_domain" {
  for_each = local.domains
  name    = each.value
  type    = "A"
  zone_id = data.aws_route53_zone.this.id
  alias {
    name                   = aws_cloudfront_distribution.this.domain_name
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    evaluate_target_health = false
  }
}
