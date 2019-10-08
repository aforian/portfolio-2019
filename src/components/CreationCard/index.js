import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import "./index.sass"

const CreationCard = ({ creation: { node : { frontmatter } }}) => {

  const { picture, title, description, year, tags, slug, featuredImage } = frontmatter;
  const featuredImgFluid = featuredImage.childImageSharp.fluid;

  return (
    <Link
      className="creation-card"
      to={`/creation${slug}`}
      state={{
        modal: true,
        noScroll: true
      }}>
      <div className="card-header">
        <div className="img-block">
          <Img
            className={'img-inner'}
            fluid={featuredImgFluid}
            title={title}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
            }}
          />
{/*           <img */}
{/*             src={picture} */}
{/*             alt={title} */}
{/*           /> */}
        </div>
      </div>
      <div className="card-body">

        <p>{picture}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {
            tags.map((tag, tid) => (
              <li
                className="tag"
                key={tid}>
                #{tag}
              </li>
            ))
          }
        </ul>
        <h4 className="year">{year}</h4>
      </div>
    </Link>
  )
}

CreationCard.propTypes = {
  creation: PropTypes.object,
}

CreationCard.defaultProps = {
  creation: {},
}

export default CreationCard