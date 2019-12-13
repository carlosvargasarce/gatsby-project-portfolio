import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/App";
import styles from "../styles/about.module.scss";
import { motion } from 'framer-motion';
import bgVideo from '../videos/bg-video.mp4';

export default ({ data }) => {


  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.videoSection}>
          <video autoPlay muted loop id="myVideo">
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className={styles.content}>
            <h1>Know a little<span> About me</span></h1>
            <p>What I do, what I like, among other things</p>
          </div>
          <div className={styles.overlay} />
        </div>

        <div className={styles.container}>
          
        </div>
      </div>
    </Layout>
  )
}
