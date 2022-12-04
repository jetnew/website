import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from '@mui/material'
import Layout from '../components/layout'
import PostBanner from '../components/postbanner'
import ProjectBanner from '../components/projectbanner'
// import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

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

  const posts = data.allMdx.nodes
    .filter((node) => node.internal.contentFilePath.match(new RegExp('/blog/')))

  const projects = data.allMdx.nodes
    .filter((node) => node.internal.contentFilePath.match(new RegExp('/portfolio/')))

  return (
    <Layout pageTitle="Hi! I'm Jet :)">
      <p>I'm a data scientist in Singapore. I write about data science, engineering and research. I like games and building AI to play games.</p>
      <p>More <Link to="/about">about me</Link>.</p>

      <h1>Latest Posts</h1>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PostBanner post={posts[0].frontmatter}></PostBanner>
        </Grid>
        <Grid item xs={6}>
          <PostBanner post={posts[1].frontmatter}></PostBanner>
        </Grid>
      </Grid>

      <h1>Projects</h1>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProjectBanner project={projects[0].frontmatter}></ProjectBanner>
        </Grid>
        <Grid item xs={4}>
          <ProjectBanner project={projects[1].frontmatter}></ProjectBanner>
        </Grid>
        <Grid item xs={4}>
          <ProjectBanner project={projects[2].frontmatter}></ProjectBanner>
        </Grid>
      </Grid>
    </Layout>
  )
}


export const Head = () => <Seo title="Home Page" />

export default IndexPage
