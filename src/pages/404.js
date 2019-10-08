import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import './error404.sass'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section id="error-404-section">
      <h1>NOT FOUND</h1>
      <h2>你要找的頁面不存在</h2>
      <Link class="link-btn" to="/">返回首頁</Link>
    </section>
  </Layout>
)

export default NotFoundPage
