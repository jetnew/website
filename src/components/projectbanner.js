import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from './link'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';



const ProjectBanner = ({ project }) => {
    return (
        <Card variant="outlined" sx={{ p: 1 }}>
            <Link to={`/portfolio/${project.slug}`} underline="none">
                <CardContent>
                    <Typography variant="button">{project.date}</Typography>
                    <Typography variant="body1"><b>{project.title}</b></Typography>
                    <Typography variant="body2">{project.excerpt}</Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Article" variant="outlined" />
                        <Chip label="Code" variant="outlined" icon={<OpenInNewIcon />} />
                    </Stack>
                </CardContent>
            </Link>
        </Card>
    )
}

export default ProjectBanner