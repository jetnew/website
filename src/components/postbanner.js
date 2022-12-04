import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from './link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'


const PostBanner = ({ post }) => {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Typography variant="button">{post.date}</Typography>
            </Grid>
            <Grid item>
                <Link to={`/blog/${post.slug}`}>
                    <Typography variant="body1"><b>{post.title}</b></Typography>
                </Link>
            </Grid>
        </Grid >
    )
}

export default PostBanner