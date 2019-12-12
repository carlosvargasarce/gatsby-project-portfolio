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
              <p>Please fill in the following information.</p>
            </div> 
          </div> 
        </div>

        {/* Form */}
        <div className={styles.container}>
          <p className={styles.contactIntro}>It would be a pleasure to meet you. If you want to hired me or if you have any inquiry, suggestion or petition just let me know. The only thing you have to do is to fill the following information. Let's get in touch!</p>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact/thanks/">
            <p>
              <label>Your Name * <input required type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email * <input required type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Phone (optional) <input type="text" name="phone" /></label>
            </p>
            <p>
              <label>Message * <textarea required name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </div>
      </div>
    </Layout>
  )
}
