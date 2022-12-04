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
            <CardContent>
                <Stack spacing={1}>
                    <Typography variant="button">{project.date}</Typography>
                    <Link to={`/portfolio/${project.slug}`} underline="hover" color="inherit">
                        <Typography variant="body1"><b>{project.title}</b></Typography>
                    </Link>
                    <Typography variant="body2">{project.excerpt}</Typography>
                    <Stack direction="row" spacing={1}>
                        <Link to={`/portfolio/${project.slug}`} underline="none">
                            <Chip label="Article" variant="outlined" onClick={() => { }} />
                        </Link>
                        <Chip label="Code" variant="outlined" icon={<OpenInNewIcon />} onClick={() => { }} />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default ProjectBanner