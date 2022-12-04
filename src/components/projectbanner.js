import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from './link'

const ProjectBanner = ({ project }) => {
    return (
        <nav>
            <Link to={`/portfolio/${project.slug}`} underline="none">
                <a>{project.date} | </a>
                <a>{project.title}</a>
            </Link>
        </nav>
    )
}

export default ProjectBanner