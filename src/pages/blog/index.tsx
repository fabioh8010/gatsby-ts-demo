import Layout from '@components/layout'
import { graphql, Link, PageProps } from 'gatsby'
import * as React from 'react'

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  return (
    <Layout pageTitle={'My Blog Posts'}>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter!.title}</Link>
          </h2>

          <p>Posted: {node.frontmatter!.date}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query BlogPage {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
