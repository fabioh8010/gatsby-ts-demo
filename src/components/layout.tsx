import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { PropsWithChildren } from 'react'
import * as styles from '@components/layout.module.css'

type Props = {
  pageTitle: string
}

const Layout = ({ pageTitle, children }: PropsWithChildren<Props>) => {
  const data = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <header className={styles.siteTitle}>{data.site.siteMetadata.title}</header>

      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link className={styles.navLinkText} to={'/'}>
              Home
            </Link>
          </li>

          <li className={styles.navLinkItem}>
            <Link className={styles.navLinkText} to={'/about'}>
              About
            </Link>
          </li>

          <li className={styles.navLinkItem}>
            <Link className={styles.navLinkText} to={'/blog'}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
