/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jet New`,
    siteUrl: `https://jetnew.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-remark-images",
    "gatsby-remark-prismjs",
    "gatsby-remark-autolink-headers",
    "gatsby-transformer-sharp",
  ],
}
