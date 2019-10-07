import React from "react"
import PropTypes from "prop-types"
import "./index.sass"
import { config } from "data"

const Footer = () => (
  <footer id="footer">
    <div className="container footer-block">
      <p className="copyright">
        {config.name} 2019 © All right reserved.
      </p>
    </div>
  </footer>
)


export default Footer