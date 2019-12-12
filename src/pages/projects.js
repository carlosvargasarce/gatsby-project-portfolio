import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/App";
import styles from "../styles/projects.module.scss";
import { motion } from 'framer-motion';

export default ({ data }) => {
  
  console.log('DATA', data);

  const Button = motion.button;

  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "images/pages/projects-banner.jpg"}) {
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
          frontmatter: {type: {eq: "project"}}
        }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "YYYY")
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              excerpt
              category
              website
              tags
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
      <div className={styles.projects}>
        <div className={styles.banner} style={{ backgroundImage: `url(${logo.file.childImageSharp.fluid.src})`}}>
          <div className={styles.overlay}>
            <div className={styles.bannerContent}>
              <h1>Projects</h1>
              <p>List of projects of which I have been a part, mainly as a Frontend Developer and Web Designer.</p>
              <Link to="/contact">
                <Button
                  className={styles.aboutButton}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Contact me
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
                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={node.frontmatter.title}
                  />
                  <div className={styles.overlay} />
                </div>
                <p className={styles.details}>
                  <small>
                    <span>Website: </span> 
                    {node.frontmatter.website} 
                    
                    <div className={styles.year}>
                      <span>Year: </span>
                      {node.frontmatter.date}
                    </div> 
                  </small>
                </p>
                <h3>
                  <span></span> {node.frontmatter.title}
                </h3>
                <div className={styles.tags}>
                  {node.frontmatter.tags.split(',').map(tag => (
                    <span>{tag}</span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
