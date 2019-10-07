/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from 'react-helmet'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"
import BackToTop from "../BackToTop"
import "./index.sass"

const Layout = ({ children, bodyClass, headerClass }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css"
        />
      </Helmet>
      <Header
        siteTitle={data.site.siteMetadata.title}
        bodyClass={bodyClass}
        headerClass={headerClass}
      />
      <main id={bodyClass}>{children}</main>
      <Footer />
      <BackToTop/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string.isRequired,
}

Layout.defaultProps = {
  bodyClass: `home`,
}

export default Layout
