import React from "react";
import Header from '../Header';
import Footer from '../Footer';
import { useStaticQuery, graphql } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions'

export default ({ children }) => {
  console.log(children);
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <Header />
        <PageTransition>
          {children}
        </PageTransition>
      <Footer />
    </div>
  )
}