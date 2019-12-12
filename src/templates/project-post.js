import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/App";
import styles from "../styles/project.module.scss";
import SEO from "../components/SEO";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
        />
        <div className={styles.project}>
          <div className={styles.banner} style={{ backgroundImage: `url(${data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src})`}}>
            <div className={styles.overlay}>
              <div className={styles.bannerContent}>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
              </div> 
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.mainTitle}>{post.frontmatter.title}</h1>
              <p className={styles.details}>
                <small>
                  <span>Website: </span> 
                  <a href={post.frontmatter.website}>{post.frontmatter.website}</a>
                  
                  <div className={styles.year}>
                    <span>Year: </span>
                    {post.frontmatter.date}
                  </div> 
                </small>
              </p>
              <hr />
              <div className={styles.tags}>
                {post.frontmatter.tags.split(',').map(tag => (
                  <span>{tag}</span>
                ))}
              </div>
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
        website,
        tags,
        date(formatString: "YYYY"),
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