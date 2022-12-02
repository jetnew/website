import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const PortfolioPage = ({data}) => {
  return (
      <Layout pageTitle="Projects">
        <p>I work on many AI projects!</p>
      </Layout>
  )
}

export const query = graphql`
    query MyQuery {
        allMdx(sort: {frontmatter: {date: DESC}}) {
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
