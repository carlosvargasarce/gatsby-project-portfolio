import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/App";
import Img from "gatsby-image";
import styles from "../styles/index.module.scss";
import NSI from "../components/NonStretchedImage";

export default ({ data }) => {
  /* LOGO */

  console.log('DATA', data);
  const home = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "images/logos/logo.png"}) {
        childImageSharp {
          fluid (maxWidth: 700, quality: 100){
            ...GatsbyImageSharpFluid_noBase64
            presentationWidth
          }
        }
      },
      allMarkdownRemark(
        limit: 3,
        sort: {
          fields: [frontmatter___date],
          order: DESC,
        },
        filter: {
          frontmatter: {type: {eq: "article"}}
        }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              excerpt
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={styles.home}>
        {/* Intro */}
        <div className={styles.intro}>
          <div className={styles.imgContainer}>
            <NSI
              fluid={home.file.childImageSharp.fluid}
              alt="Gatsby Docs are awesome"
            />
          </div>
        </div>
        {/* List of articles */}
        <div className={styles.articles}>
          <div className={styles.mainTitle}>
            <h1>Short Stories</h1>
            <p>Time is really precious, do not wasted it</p>
          </div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className={styles.article} key={node.id}>
              <Link
                to={node.fields.slug}
                className={styles.link}
              >
                <div className={styles.imageContainer}>
                  <Img
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                    alt={node.frontmatter.title}
                  />
                </div>
                <p><small><span className={styles.category}>{node.frontmatter.category}</span> <span className={styles.date}>{node.frontmatter.date}</span></small></p>
                <h3>
                  {node.frontmatter.title}
                </h3>
                <p className={styles.excerpt}>{node.frontmatter.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
