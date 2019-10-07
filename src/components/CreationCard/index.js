import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./index.sass"

const CreationCard = ({ creation: { node : { frontmatter } }}) => {

  const { picture, title, description, year, tags, slug } = frontmatter;

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
          <img
            src={picture}
            alt={title}
          />
        </div>
      </div>
      <div className="card-body">
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