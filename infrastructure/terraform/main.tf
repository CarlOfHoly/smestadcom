terraform {
  required_version = "1.2.7"
  backend "s3" {
    key            = "website/state.tfstate"
    bucket         = "737032216196-terraform-state" # TODO: Din AWS konto-ID.
    dynamodb_table = "737032216196-terraform-lock"  # TODO: Din AWS konto-ID.
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
  allowed_account_ids = ["737032216196"] # TODO: Din AWS konto-ID.
}

locals {
  name_prefix        = "website"
  root_domain        = "smestad.com"
  current_account_id = data.aws_caller_identity.current.id
  current_region     = data.aws_region.current.name
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
    subscriber_email_addresses = ["carl.smestad+dev@gmail.com"] # TODO: Din e-post
  }
}

resource "aws_s3_bucket" "website" {
  bucket = "${local.name_prefix}-${local.current_account_id}-website"
  versioning {
    enabled = true
  }
  force_destroy = true
  website {
    index_document  = "index.html"
    eerror_document = "index.html"
  }

}

data "aws_iam_policy_document" "s3_access" {
  statement {
    actions   = ["s3:GetObject"]
    resources = [aws_s3_bucket.website.arn, "${aws_s3_bucket.website.arn}/*"]
    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket_policy" "this" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.s3_access.json
}
