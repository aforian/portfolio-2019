import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.sass"
import { config } from "data"

const Icon = ({ href, icon }) => (
  <a
    target="_blank"
    href={href}
    rel="external nofollow noopener noreferrer"
    className="custom-icon"
  >
    <span className="fa-layers fa-fw fa-lg">
      <FontAwesomeIcon icon={icon} />
    </span>
  </a>
);

const Footer = () => (
  <footer id="footer">
    <div className="container footer-block">
      <div className="row justify-content-between align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6">
          <p className="copyright">
            {config.name} 2019 © All right reserved.
          </p>
        </div>
        <div className="col-md-6">
          <ul className="social-link d-flex justify-content-center justify-content-md-end">
            <li>
              <Icon
                icon={['fab', 'medium-m']}
                href={`https://medium.com/@alexian853`}
              />
            </li>
            <li>
              <Icon
                icon={['fab', 'github']}
                href={`https://github.com/aforian/`}
              />
            </li>
            <li>
              <Icon
                icon={['fas', 'blog']}
                href={`https://alexian.me/`}
              />
            </li>
          </ul>
        </div>
      </div>

    </div>
  </footer>
)


export default Footer