const path = require('path');

module.exports = {
  siteMetadata: {
    siteTitle: 'Sarthak Narayan',
    siteDescription: "Sarthak's blog cum personal portfolio website",
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://sarthak-narayan.netlify.app/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Sarthak Narayan', // for example - 'Ivan Ganev'
    authorDescription: '', // short text about the author
    avatar: '/mypic.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `envelope`,
        url: `mailto:sarthak.narayang@gmail.com`,
      },
      {
        icon: `github`,
        url: `https://github.com/SarthakNarayan`,
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/sarthaknarayan/`,
      },
      {
        icon: `chromecast`,
        url: `https://sarthak-narayan.netlify.app/rss.xml`,
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
        trackingId: 'UA-174004633-1',
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
    {
      resolve: 'gatsby-plugin-feed-mdx',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title: siteTitle
              description: siteDescription 
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              let feed_array = []
              for (edge of allMdx.edges) {
                if (edge.node.frontmatter.hide != null && edge.node.frontmatter.hide == false) {
                  let feed = Object.assign({}, {
                    // commented since most feedreaders take this instead of html
                    // description: edge.node.frontmatter.description,
                    title: edge.node.frontmatter.title,
                    date: edge.node.frontmatter.date,
                    author: 'Sarthak Narayan',
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    categories: edge.node.frontmatter.tags,
                    custom_elements: [{ "content:encoded": edge.node.html }],
                  });
                  // console.log(JSON.stringify(edge.node.frontmatter))
                  feed_array.push(feed)
                }
              }
              return feed_array
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    html
                    fields { slug }
                    frontmatter {
                      title
                      description
                      date
                      hide
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: "Sarthak Naryan's website rss feed",
            feed_url: 'https://sarthak-narayan.netlify.app/rss.xml',
            managingEditor: 'Sarthak Narayan',
            webMaster: 'Sarthak Narayan',
            copyright: 'Sarthak Narayan'
          }
        ]
      }
    }
  ],
};
