import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/App";
import styles from "../styles/blog.module.scss";
import { motion } from 'framer-motion';

export default ({ data }) => {
  
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
      }
    }
  `)


  return (
    <Layout>
      <div className={styles.blog}>
        <div className={styles.banner} style={{ backgroundImage: `url(${logo.file.childImageSharp.fluid.src})`}}>
          <div className={styles.overlay}>
            <div className={styles.bannerContent}>
              <h1>Woxry Wlog</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus sit amet lorem sit amet sagittis. Sed cursus arcu vel orci vehicula, nec laoreet turpis dapibus.</p>
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
        {/*<h4>{data.allMarkdownRemark.totalCount} Posts</h4>

        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))*/}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`