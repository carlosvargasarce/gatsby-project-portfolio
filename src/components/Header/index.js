import React, { useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../utils/use-dimensions";
import styles from "./style.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import classnames from 'classnames';
import { Link } from "gatsby";
import { MenuToggle } from "../MenuToggle";
import { Navigation } from "../Navigation"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 240px 60px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function Header ({ siteTitle }) {
  // const [isExpanded, toggleExpansion] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "images/logos/logo-mobile.png"}) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 60) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Gatsby Docs are awesome"
          />
        </Link>
      </div>
      <nav className={styles.topNavigation}>
        <Link activeClassName={styles.activeLink} to="/">WHOLE</Link>
        <Link activeClassName={styles.activeLink} to="/who">WHO</Link>
        <Link activeClassName={styles.activeLink} to="/work">WORK</Link>
        <Link activeClassName={styles.activeLink} to="/wlog">WLOG</Link>
        <Link activeClassName={styles.activeLink} to="/woof" className={styles.contact}>WOOF</Link>
      </nav>

      <div className={styles.mobileNavigation}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className={styles.background} variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
      <div onClick={toggleOpen} className={classnames(styles.generalBackground, isOpen ? styles.showBG : null)} />

    </header>
  )
}

export default Header;

