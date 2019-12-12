import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/App";
import styles from "../styles/contact.module.scss";
import { motion } from 'framer-motion';

export default ({ data }) => {
  const contact = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "images/pages/projects-banner.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 2880, quality: 99){
            ...GatsbyImageSharpFluid_noBase64
            presentationWidth
          }
        }
      },
    }
  `)

  return (
    <Layout>
      <div className={styles.contact}>
        <div className={styles.banner} style={{ backgroundImage: `url(${contact.file.childImageSharp.fluid.src})`}}>
          <div className={styles.overlay}>
            <div className={styles.bannerContent}>
              <h1>Contact me</h1>
              <p>If you like to hire me or ask any questions, please fill in the following information.</p>
            </div> 
          </div> 
        </div>

        {/* Form */}
        <div className={styles.container}>
          
        </div>
      </div>
    </Layout>
  )
}
