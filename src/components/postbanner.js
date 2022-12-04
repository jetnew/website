import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from './link'

const PostBanner = ({ post }) => {
    return (
        <nav>
            <Link to={`/blog/${post.slug}`} underline="none">
                <a>{post.date} | </a>
                <a>{post.title}</a>
            </Link>
        </nav>
    )
}

export default PostBanner