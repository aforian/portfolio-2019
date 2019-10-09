import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./header.sass"

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

const Header = ({ siteTitle, bodyClass, headerClass }) => {
  const [navActive, setNavActive] = useState(false);

  return  (
    <header id="header" className={`${navActive ? 'active' : ''} ${headerClass}`}>
      <div className="container header-block">
        <h1>
          <Link to="/">
            <img
              className="logo"
              src="/images/alexian-icon.png"
              alt="logo"
            />
            <span>{siteTitle}</span>
          </Link>
        </h1>

        <nav className="header-nav">
          <button
            id="nav-menu-btn"
            onClick={() => setNavActive(!navActive)}>
            <span className="fa-layers fa-fw fa-2x">
            {
              navActive ? (
                <FontAwesomeIcon icon={['fas','times']} />
              ):(
                <FontAwesomeIcon icon={['fas','bars']} />
              )
            }
            </span>
          </button>
          <ul className={[navActive ? 'active': '']}>
{/*             <li> */}
{/*               <Link */}
{/*                 to={`/page-2`} */}
{/*                 state={{ */}
{/*                   modal: true */}
{/*                 }}> */}
{/*                 Page 2 Modal */}
{/*               </Link> */}
{/*             </li> */}
            <li onClick={() => setNavActive(false)}>
              <Link
                to={`/#my-creation`}>
                MY CREATIONS
              </Link>
            </li>
            <li onClick={() => setNavActive(false)}>
              <Link
                to={`/#contacts`}>
                CONTACTS
              </Link>
            </li>
            <li onClick={() => setNavActive(false)}>
              <Icon
                icon={['fab', 'medium-m']}
                href={`https://medium.com/@alexian853`}
              />
            </li>
            <li onClick={() => setNavActive(false)}>
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
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  navScroll: false,
}

export default Header