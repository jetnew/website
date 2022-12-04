import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from './link'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'


const ProjectBanner = ({ project }) => {
    return (
        <Card variant="outlined" sx={{ p: 1 }}>
            <CardContent>
                <Link to={`/portfolio/${project.slug}`} underline="none">
                    <Typography variant="button">{project.date}</Typography>
                    <Typography variant="body1"><b>{project.title}</b></Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default ProjectBanner