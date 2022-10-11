module.exports = {
  siteMetadata: {
    title: `Portfolio site`,
    description: `This is my portfolio site made with Gatsby`,
    author: `Carl Smestad`,
  },
  pathPrefix: "/smestad.xyz",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio website`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#020c18`,
        theme_color: `#020c18`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
        cache_busting_mode: `none`,
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/favicon-*`],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
  ],
}
