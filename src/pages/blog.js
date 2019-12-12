import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/App";
import styles from "../styles/blog.module.scss";
import { motion } from 'framer-motion';

export default ({ data }) => {
  
  console.log('DATA', data);

  const Button = motion.button;

  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "images/pages/blog-banner.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 2880, quality: 99){
            ...GatsbyImageSharpFluid_noBase64
            presentationWidth
          }
        }
      },
      allMarkdownRemark(
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
      <div className={styles.blog}>
        <div className={styles.banner} style={{ backgroundImage: `url(${logo.file.childImageSharp.fluid.src})`}}>
          <div className={styles.overlay}>
            <div className={styles.bannerContent}>
              <h1>Woxry Blog</h1>
              <p>Series of articles related to Web Development, my hobbies, technology, among others.</p>
              <Link to="/who">
                <Button
                  className={styles.aboutButton}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  About me
                </Button>
              </Link>
            </div> 
          </div> 
        </div>

        {/* List of articles */}
        <div className={styles.container}>
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
