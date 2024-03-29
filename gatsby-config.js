/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Woxry's Portfolio`,
    description: `Woxry playground, you can find all his projects and articles and more`,
    author: `woxry`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-page-transitions`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Woxry Portfolio`,
        short_name: `WoxryPortfolio`,
        description: `This is where @woxry show his projects and thoughts`,
        lang: `en`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}