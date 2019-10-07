import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import "./index.sass"

const SecondPage = ({ location }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <>
      {
        modal ? (
          <div>
            <Link to={closeTo}>
              Close
            </Link>
            <SEO title="Page two" />
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
          </div>
        ) : (
          <Layout  bodyClass={`page-2`}>
            <SEO title="Page two" />
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
          </Layout>
        )
      }
      </>
    )}
  </ModalRoutingContext.Consumer>

)

export default SecondPage
