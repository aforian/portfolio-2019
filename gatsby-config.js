const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Alex Ian Portfolio`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/sparo-1024.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, 'src'),
        // pages: path.join(__dirname, 'src/pages'),
        data: path.join(__dirname, 'data'),
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Avenir Next']
        }
      }
    },
    {
    resolve: `gatsby-plugin-fixhash`,
      options: {
        offsetY: 60, // number, optional offset
        scrollToOptions : {
          // see: https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions
          behavior: `smooth`
        }
      }
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          style: {
            html: {
              overflow: `hidden`,
            },
            overlay: {
              zIndex: 500,
              position: `fixed`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(0, 0, 0, 0.75)`,
            },
            content: {
              position: `absolute`,
              border: `none`,
              background: `none`,
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            },
          },
          contentLabel: `Modal`
        },
      }
    },
    /* `gatsby-plugin-routes` cant suitable with CreatePages yet.*/
    // {
    //   resolve: `gatsby-plugin-routes`,
    //   options: {
    //     // this is the path to your routes configuration file
    //     path: `${__dirname}/src/routes/index.js`,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
