import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from '@mui/material'
import Layout from '../components/layout'
import PostBanner from '../components/postbanner'
import ProjectBanner from '../components/projectbanner'
// import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            slug
          }
          id
          excerpt
          internal {
            contentFilePath
          }
        }
      }
    }`)
  return (
    <Layout pageTitle="Hi! I'm Jet :)">
      <p>I'm a data scientist in Singapore. I write about data science, engineering and research. I like games and building AI to play games.</p>
      <p>More <Link to="/about">about me</Link>.</p>
      <h1>Latest Posts</h1>
      {
        data.allMdx.nodes
          .filter((node) => node.internal.contentFilePath.match(new RegExp('/blog/')))
          .map((node) => (
            <PostBanner post={node.frontmatter}></PostBanner>
          ))
      }
      <h1>Projects</h1>
      {
        data.allMdx.nodes
          .filter((node) => node.internal.contentFilePath.match(new RegExp('/portfolio/')))
          .map((node) => (
            <ProjectBanner project={node.frontmatter}></ProjectBanner>
          ))
      }
    </Layout>
  )
}


export const Head = () => <Seo title="Home Page" />

export default IndexPage
