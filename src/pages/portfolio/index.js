import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ProjectBanner from '../../components/projectbanner'
import Grid from '@mui/material/Grid'

const PortfolioPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout >
  )
}

export const query = graphql`
    query {
        allMdx(
          sort: {frontmatter: {date: DESC}}
          filter: {internal: {contentFilePath: {regex: "/portfolio/"}}}
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

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage
