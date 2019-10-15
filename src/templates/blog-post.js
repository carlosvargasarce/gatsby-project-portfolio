import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/App"
import SEO from "../components/SEO"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
        />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        excerpt
      }
    }
  }
`