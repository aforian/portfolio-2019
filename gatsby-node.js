/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const path = require('path');

exports.createPages = ({actions, boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;
  // const {createPage} = actions;

  const creationTemplate = path.resolve('src/templates/creation.js');

  return graphql(`{
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
          html
          id
          frontmatter {
            title
            slug
            picture
          }
        }
      }
    }
  }`)
  .then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    console.log(res.data.allMarkdownRemark);

    const { edges = [] } = res.data.allMarkdownRemark;

    edges.forEach(({node}, index) => {
      const { id, frontmatter } = node;
      const { slug } = frontmatter;

      let $path = `/creation${slug}`;

      const filterEdges = edges.map(({node}) => node.frontmatter.title)

      createPage({
        path: $path,
        component: creationTemplate,
        context: {
          id,
          index,
          slug,
          prev: index === 0 ? edges[edges.length-1] : edges[index-1],
          next: index === (edges.length-1) ? edges[0] : edges[index+1],
          filterEdges
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    // 如果 markdown 的 frontmatter 裡面有 slug 的話，直接讀就可以了
    let { slug = '' } = node.frontmatter;

    if (slug === null || slug.trim() === '') {
      slug = createFilePath({ node, getNode, basePath: 'pages' });
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};