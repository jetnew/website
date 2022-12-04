import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from './link'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'


const ProjectBanner = ({ project }) => {
    return (
        <Card variant="outlined" sx={{ p: 1 }}>
            <Link to={`/portfolio/${project.slug}`} underline="none">
                <CardContent>
                    <Typography variant="button">{project.date}</Typography>
                    <Typography variant="body1"><b>{project.title}</b></Typography>
                </CardContent>
            </Link>
        </Card>
    )
}

export default ProjectBanner