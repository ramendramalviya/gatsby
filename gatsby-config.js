/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial",
    siteUrl: "https://www.gatsbyjs.org",
    description: "This is description",
    author: "test",
    data: ["item1", "item2"],
    person: {name: "peter", age: 30}
  }, 
  plugins: ['gatsby-plugin-styled-components',
  'gatsby-transformer-sharp', 'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: 'src/images/',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: 'src/posts/',
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `wmus45ghn532`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: `KeWYZj2TpPiGFs7fYf8Bxa9wFOiDDHvWLylNsk9tAWw`,
    },
  },
  {
    resolve: `gatsby-source-drupal7`,
    options: {
      baseUrl: `https://dev-gatsby-learning.pantheonsite.io/`,
      apiBase: `restws_resource.json`, // optional, defaults to `restws_resource.json`
      basicAuth: {
        username: "restws.ramendra",
        password: "tech@12345",
      },
    },
  },
  /*
  {
    resolve: 'gatsby-source-rest-api',
    options: {
      endpoints: [
        'http://dev-gatsby-learning.pantheonsite.io/jsonapi/testresult',
        'https://jsonplaceholder.typicode.com/posts',
      ],
    },
  },
  */
  {
    resolve: "gatsby-source-custom-api",
    options: {
        url: "http://dev-gatsby-learning.pantheonsite.io/jsonapi/testresult",
        rootKey: 'gatsbydemoone',
    },
    imageKeys: ["field_gatsbyimg"],
    schemas: {
      field_gatsbyimg: `String`
  }
},
{
  resolve: "gatsby-source-custom-api",
  options: {
      url: "http://dev-gatsby-learning.pantheonsite.io/jsonapi/testresulttwo",
      rootKey: 'gatsbydemotwo',
  },
  imageKeys: ["field_image_demo"],
  schemas: {
    field_image_demo: `String`,
    
}
},
],
    /*{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],*/
  
}
