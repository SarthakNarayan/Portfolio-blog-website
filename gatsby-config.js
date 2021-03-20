const path = require('path');

module.exports = {
  siteMetadata: {
    siteTitle: 'Sarthak Narayan',
    siteDescription: 'My blog cum personal portfolio website',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://sarthak-narayan.netlify.app/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Sarthak Narayan', // for example - 'Ivan Ganev'
    authorDescription: 'Full stack developer', // short text about the author
    avatar: '/mypic.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `sarthak.narayang@gmail.com`,
      },
      {
        icon: `github`,
        url: `https://github.com/SarthakNarayan`,
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/sarthaknarayan/`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, `static`, `media`),
        name: 'media',
      },
    },
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags',
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        publicPath: `admin`,
        modulePath: path.join(__dirname, `src`, `netlifycms`, 'cms.js'),
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
