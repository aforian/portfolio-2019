import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { config } from 'data'

const schemaOrgJSONLD = ({
  url,
  title,
  siteTitleAlt,
  isCreation,
  image,
  description,
}) => [
  {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url,
    name: title,
    alternateName: siteTitleAlt || '',
  },
  isCreation
    ? {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': url,
            name: title,
            image,
          },
        },
      ],
    }
    : '',
  isCreation
    ? {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url,
      name: title,
      alternateName: siteTitleAlt || '',
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      description,
    }
    : '',
];

function SEO({
  url, title, description, image, siteTitleAlt, isCreation, lang
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const metaImage = image.substr(0,4) !== `http`
    ? `${config.url}${image}`
    : image;

  const titleTemplate = title !== site.siteMetadata.title
    ? `%s | ${site.siteMetadata.title}`
    : title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
    >
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={metaImage} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD(url, title, siteTitleAlt, isCreation))}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isCreation ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.twitter_username ? config.twitter_username : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: config.meta.description,
  siteTitleAlt: config.meta.title,
  isCreation: false,
  image: config.meta.favicon,
  url: config.url,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  isCreation: PropTypes.bool.isRequired,
  image: PropTypes.string,
  url: PropTypes.string,
}

export default SEO
