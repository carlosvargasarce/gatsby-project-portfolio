import React from "react";
import styles from "./style.module.scss";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "images/logos/logo.png"}) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <div className={styles.topInfo}>
          <div className={styles.content}>
            <div className={styles.column}>
              <Link to="/">
                <Img
                  fixed={data.file.childImageSharp.fixed}
                  alt="Woxry Logo"
                />
              </Link>
              <p>What is Woxry? It is just a random and unique 5 letters username. What does it mean? Nothing. I chose it randomly 10 years ago, just picking up 5 letters that sounded "ok".</p>
              {/*<Link to="/contact">{t('footer.contact')}</Link>*/}
            </div>
            <div className={styles.column}>
              <h2>Explore the side</h2>
              <Link to="/">Whole -> Summary</Link>
              <Link to="/about">Who -> Am I?</Link>
              <Link to="/projects">Work -> Projects</Link>
              <Link to="/blog">Wlog -> Curiosities</Link>
              <Link to="/contact">Woof -> Hit me up!</Link>
              {/*
              <Link to="/products">{t('footer.products')}</Link>
              */}
            </div>
            <div className={styles.column}>
            <h2>About me</h2>
            <p className={styles.contactPhrase}>If you want to talk about some project, some idea you have or if you want to invite me for a coffee, or hired me, or invite to a hike just send me a message <Link to="/contact">HERE</Link> or follow me on Social Media</p>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/in/woxry/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.facebook.com/woxry" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
              <a href="https://www.instagram.com/woxry" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="mailto:imwoxry@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.bottomInfo}>
          <div className={styles.triangle} />
          <div className={styles.content}>
            <div className={styles.column}>
              <p>Copyright© 2019</p>
            </div>
            <div className={styles.column}>
               
            </div>
            <div className={styles.column}>
              <p>Developed By <strong>Carlos Vargas Arce (@woxry)</strong></p>
            </div>
          </div>
        </div>
    </footer>
  )
}