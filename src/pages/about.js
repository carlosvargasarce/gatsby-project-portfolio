import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/App";
import styles from "../styles/about.module.scss";
import { motion } from 'framer-motion';
import bgVideo from '../videos/bg-video.mp4';
import { FaHiking, FaTv, FaTheaterMasks, FaMusic, FaGamepad, FaDumbbell } from 'react-icons/fa';

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

        <div className={styles.hobbies}>
          <div className={styles.container}>
            <div className={styles.hobbiesList}>
              <div className={styles.mainTitle}>
                <h1>My hobbies</h1>
                <p>Not everything is work, life is short, enjoy it</p>
              </div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.icon}><FaHiking /></div>
                  <h2>Hiking</h2>
                  <p>This is from far my favorite hobby, outdoors and adventures are my thing</p>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}><FaTv /></div>
                  <h2>TV</h2>
                  <p>Watch series, movies, anime, documentals. There are too much to see</p>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}><FaTheaterMasks /></div>
                  <h2>Theather</h2>
                  <p>When a movie is worth it, you have to go to the cinema + popcorn</p>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}><FaMusic /></div>
                  <h2>Music</h2>
                  <p>I really love to listen to music, my favorite is old music like 80's</p>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}><FaGamepad /></div>
                  <h2>Video Games</h2>
                  <p>Mmorpgs are my thing! I try to avoid them cause I kinda addict to them</p>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}><FaDumbbell /></div>
                  <h2>Sports</h2>
                  <p>Chalistenics, gym, running, trail, extreme sports, etc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
