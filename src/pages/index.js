import React, { useState, useEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CreationCard from "../components/CreationCard"
// import HomeHero from "../components/HomeHero"

import { config } from 'data';

import "./index.sass"
import "../templates/creation.sass"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges: creations } } = data;

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (e) => {
    setScrollY(window.pageYOffset || window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <Layout bodyClass={`home`}>
      <SEO
        title="Alex Ian Portfolio"
      />

      <section id="hero-section" className="section">
{/*         <HomeHero /> */}
        <h1>
          PORTFOLIO 2019
        </h1>
        <h3>
          ALEX IAN
        </h3>
      </section>

      <div id="my-creation"></div>
      <section id="creation-section" className="section">
        <div className="rects">
          <div
            className="rect rect-2"
            style={{
              transform: `rotate(${-scrollY+35%360}deg)`,
            }}
          ></div>
          <div
            className="rect rect-1"
            style={{
              transform: `rotate(${scrollY%360}deg)`,
            }}
          ></div>
        </div>
        <div className="container">
          <div className="container-header">
            <h2>MY CERATIONS</h2>
            <h2>作品</h2>
          </div>
          <div className="row container-body">
            {
              creations.map((creation, cid) => (
                <div
                  className="col-12 col-md-6 card-wraper"
                  key={cid}>
                  <CreationCard
                    creation={creation}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <div id="contacts"></div>
      <section id="contact-section" className="section">
        <div className="container">
          <div className="container-header">
            <h2>
              CONTACTS
            </h2>
            <h2>
              聯絡方式
            </h2>

            <h3>Mail</h3>
            <h4>{config.mail}</h4>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query creations {
    allMarkdownRemark(
      sort: {
        order: DESC
        fields: frontmatter___date
      }
      filter: {
        frontmatter: {
          publish: {
            eq: true
          }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            picture
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            year
            tags
            slug
          }
          html
        }
      }
    }
  }
`


export default IndexPage
