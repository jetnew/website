import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import PostBanner from '../../components/postbanner'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Writing">
      {
        data.allMdx.nodes.map((node) => (
          // <article key={node.id}>
          //   <h2>
          //     <Link to={`/blog/${node.frontmatter.slug}`}>
          //       {node.frontmatter.title}
          //     </Link>
          //   </h2>
          //   <p>{node.frontmatter.date}</p>
          // </article>
          <PostBanner post={node.frontmatter}></PostBanner>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(
          sort: {frontmatter: {date: DESC}}
          filter: {internal: {contentFilePath: {regex: "/blog/"}}}
        ) {
          nodes {
            frontmatter {
              title
              date(formatString: "DD MMM YYYY")
              slug
            }
            id
            excerpt
          }
        }
      }
      `

export const Head = () => <Seo title="Blog" />

export default BlogPage
