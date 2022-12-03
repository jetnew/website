import * as React from 'react'
// import { Link } from 'gatsby'
import { Link } from '@mui/material'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Hi! I'm Jet :)">
      <p>I'm a data scientist in Singapore. I write about data science, engineering and research. I like games and building AI to play games.</p>
      <p>More <Link to="/about">about me</Link>.</p>
      <h2>Latest Posts</h2>
      <h2>Projects</h2>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
