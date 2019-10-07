import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./header.sass"

const Icon = ({ href, icon }) => (
  <a
    target="_blank"
    href={href}
    rel="external nofollow noopener noreferrer"
    className="custom-icon"
  >
    <span className="fa-layers fa-fw fa-2x">
      <FontAwesomeIcon icon={icon} />
    </span>
  </a>
);

const Header = ({ siteTitle }) => (
  <header id="header">
    <div className="container header-block">
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>

        <nav className="header-nav">
          <ul>
{/*             <li> */}
{/*               <a href="">MY CREATIONS</a> */}
{/*             </li> */}
{/*             <li> */}
{/*               <a href="">CONTACTS</a> */}
{/*             </li> */}
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
          </ul>
        </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header