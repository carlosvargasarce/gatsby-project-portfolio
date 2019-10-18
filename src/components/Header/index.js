import React, { useState } from "react";
import styles from "./style.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

function Header ({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  const stylesLocal = {
    menuButton: {
      height: '52px',
      width: '52px',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '4px',
      float: 'right',
    },
    line: {
      height: '3px',
      width: '40px',
      background: '#262626',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: isExpanded ? 'rotate(-45deg)': 'none',
      transformOrigin: 'bottom right',
      marginBottom: '11.2px',
    },
    lineMiddle: {
      opacity: isExpanded ? 0: 1,
      transform: isExpanded ? 'translateX(16px)': 'none',
    },
    lineBottom: {
      transform: isExpanded ? 'translateX(-2px) rotate(45deg)': 'none',
      transformOrigin: 'bottom right',
      marginTop: '11.2px',
    },       
  }

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

  const handleMenuClick = () => {
    toggleExpansion(!isExpanded);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Gatsby Docs are awesome"
            //fadeIn={false}
          />
        </Link>
      </div>
      <nav>
        <Link activeClassName={styles.activeLink} to="/">WHOLE</Link>
        <Link activeClassName={styles.activeLink} to="/who">WHO</Link>
        <Link activeClassName={styles.activeLink} to="/work">WORK</Link>
        <Link activeClassName={styles.activeLink} to="/what">WHAT</Link>
        <Link activeClassName={styles.activeLink} to="/woof" className={styles.contact}>WOOF</Link>
      </nav>
      <div style={stylesLocal.menuButton} className={styles.menuButton}
        onClick={handleMenuClick}>
        <div style={{...stylesLocal.line,...stylesLocal.lineTop}} />
        <div style={{...stylesLocal.line,...stylesLocal.lineMiddle}}/>
        <div style={{...stylesLocal.line,...stylesLocal.lineBottom}} />
      </div>
    </header>
  )
}

export default Header;

