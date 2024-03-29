import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/App";
import styles from "../styles/article.module.scss";
import SEO from "../components/SEO";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
        />
        <div className={styles.article}>
          <div className={styles.banner} style={{ backgroundImage: `url(${data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src})`}}>
            <div className={styles.overlay}>
              <div className={styles.bannerContent}>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p>{data.markdownRemark.frontmatter.excerpt}</p>
              </div> 
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.mainTitle}>{post.frontmatter.title}</h1>
              <hr />
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
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
        excerpt,
        date(formatString: "DD MMMM, YYYY"),
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        category
      }
    }
  }
`