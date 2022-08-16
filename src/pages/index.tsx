import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle={'Home Page'}>
      <p>I&apos;m making this by following the Gatsby Tutorial.</p>

      <StaticImage
        alt={'A beautiful golden and white hamster staring at you'}
        src={'../images/hamster.jpeg'}
      />
    </Layout>
  )
}

export default IndexPage
