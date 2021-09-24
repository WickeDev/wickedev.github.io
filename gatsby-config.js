const fs = require('fs')
const { buildSchema, buildClientSchema } = require('graphql')

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.codesanctum.net",
    title: "wickedev blog",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `@emotion/react`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: `src/__generated__/gatsby-types.d.ts`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Velog",
        fieldName: "velog",
        url: "https://v2.velog.io/graphql",
        createSchema: async () => {
          const json = JSON.parse(
            fs.readFileSync(`external-schema/velog-introspection.json`)
          )
          return buildClientSchema(json)
        },
      }
    },
    'gatsby-transformer-remark',
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-WJH7T7BG1J",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
