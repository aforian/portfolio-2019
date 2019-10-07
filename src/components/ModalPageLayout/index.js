import React from "react"
import Layout from "../Layout"
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.sass'

const ModalPageLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      modal ? (
        <React.Fragment>
          <Link
            className={`modal-close-btn`}
            to={closeTo}>
            <span className="fa-layers fa-fw fa-2x">
              <FontAwesomeIcon icon={['fas','times']} />
            </span>
          </Link>
          <div id="modal-layout" className="container">
            {children}
          </div>
        </React.Fragment>
      ) : (
        <Layout { ...rest }>
          {children}
        </Layout>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalPageLayout