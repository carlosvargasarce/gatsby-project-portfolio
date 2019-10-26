import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/App";
import styles from "../styles/index.module.scss";
import NSI from "../components/NonStretchedImage";

export default ({ data }) => {
  /* LOGO */
  const logo = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "images/logos/logo.png"}) {
      childImageSharp {
        fluid (maxWidth: 700, quality: 100){
          ...GatsbyImageSharpFluid_noBase64
          presentationWidth
        }
      }
    }
  }
`)

  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.intro}>
          <div className={styles.imgContainer}>
            <NSI
              fluid={logo.file.childImageSharp.fluid}
              alt="Gatsby Docs are awesome"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
