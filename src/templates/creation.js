import React, { useRef, useState, useEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import ModalPageLayout from "../components/ModalPageLayout"
import Image from "../components/image"
import ExternalLink from "../components/ExternalLink"
import SEO from "../components/seo"

import "./creation.sass"

const CreationPage = ({ data, pageContext }) => {
  const { markdownRemark: creation } = data;
  const { picture, title, tags = [], specials = [], client = '無', link, slug, description, headerImage } = creation.frontmatter;
  const { prev, next } = pageContext;

  const [headerTop, setHeaderTop] = useState(9999);
  const [navScroll, setNavScroll] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = (e) => {
    // if (headerRef.current && headerTop >= window.innerHeight) {
      const { y } = headerRef.current.getBoundingClientRect();
      setHeaderTop(Math.round(y));
    // }

    if (Math.round(y) <= 60) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  }

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <ModalPageLayout bodyClass={`creation`} headerClass={`${navScroll ? 'scroll' : ''}`}>
      <SEO
        title={title}
        url={`/creation${slug}`}
        siteTitleAlt="Alex Ian Portfolio"
        isPost={true}
        description={description}
        image={picture}
      />
      <section id="banner-section" className="section">
        <div id="banner-container" className="w-100">
          <div
            className="banner-bg"
            style={{
              backgroundImage: `url(/${picture})`
            }}>
          </div>
          <div
            className="banner-block container"
            style={{
              backgroundImage: `url(/${picture})`
            }}>
          </div>
        </div>
      </section>
      <div ref={headerRef} id="header-section" className="section w-100">
        <div id="header-container" className="container">
          <div className="row content-header flex-md-nowrap align-items-md-center">
            <div className="col-md-10">
              <ul className="tags">
              {
                tags && tags.map((tag, tid) => (
                  <li key={tid}>
                    <Link
                      to={`/tags/${tag}`}>
                      #{tag}
                    </Link>
                  </li>
                ))
              }
              </ul>
              <h1>{title}</h1>
              <h3>Client: {client}</h3>
            </div>
            <div className="col-md-2 btn-link-col">
              <ExternalLink
                className={`btn-link`}
                title={`前往作品`}
                href={link}
                rel={title}
              />
            </div>
          </div>
        </div>
      </div>
      <section id="content-section" className="section">
        <div id="content-container" className="container">
          <div className="row content-body">
            <div className="col-md-12 main-col">
              <content>
                <div dangerouslySetInnerHTML = {{__html: creation.html}} />
              </content>
            </div>
          </div>
        </div>
      </section>
      <section id="more-section" className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 header-block">
              <p className="h2 text-right">MORE CREATIONS</p>
              <p className="h2 text-right">更多作品</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 more-block">
              <Link to={`/creation${prev.node.frontmatter.slug}`}>
                <div
                  className="link-block"
                  style={{
                    backgroundImage: `url(/${prev.node.frontmatter.picture})`
                  }}>
                  <div className="title-block">
                    <h3>{prev.node.frontmatter.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 more-block">
              <Link to={`/creation${next.node.frontmatter.slug}`}>
                <div
                  className="link-block"
                  style={{
                    backgroundImage: `url(/${next.node.frontmatter.picture})`
                  }}>
                  <div className="title-block">
                    <h3>{next.node.frontmatter.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </ModalPageLayout>
  )
}


export const query = graphql`
  fragment post on MarkdownRemark {
    frontmatter {
      title
      client
      picture
      description
      year
      tags
      specials
      link
      slug
    }
  }

  query BlogPostById($index: Int, $id: String!) {

    content: allMarkdownRemark(
      sort: {
        order: DESC
        fields: frontmatter___date
      }
      skip: $index
      limit: 1
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          ...post
        }
      }
    }

    markdownRemark(id: { eq: $id })  {
      id
      html
      ...post
    }
  }
`

export default CreationPage
