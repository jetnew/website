import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About me">
            <p>Hi! I'm Jet :) I'm a data scientist working in Singapore. Welcome to my website for my projects, blog posts, and anything else I want to show the world. Check out <Link to="/projects">projects</Link> to see a highlight of my work on AI, and <Link to="/blog">blog</Link> to read technical posts and more.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage
