import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
    container,
    // heading,
    navLinks,
    navLinkItem,
    navLinkText,
    // siteTitle,
} from './layout.module.css'
// import { Typography } from '@mui/material'
import Link from '../components/link'
import { Typography } from '@mui/material'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={container}>
            <Typography variant="h5" mt={10}>
                <Link to="/" underline="none" color="inherit">
                    <b>{data.site.siteMetadata.title}</b>
                </Link>
            </Typography>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText} underline="hover" color="inherit">
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText} underline="hover" color="inherit">
                            Blog
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/portfolio" className={navLinkText} underline="hover" color="inherit">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Typography variant="h4" mt={10}>
                    <b>{pageTitle}</b>
                </Typography>
                <Typography variant="p">
                    {children}
                </Typography>
            </main>
        </div >
    )
}

export default Layout
