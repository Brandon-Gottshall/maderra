module.exports = {
  siteMetadata: {
    title: `maderra`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
		  resolve: `gatsby-plugin-sharp`,
			options: {
		    useMozJpeg: true,
				stripMetadata: true,
				defaultQuality: 90,
			},
		},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maderra`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
