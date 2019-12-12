const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const resultArticles = await graphql(`
    query {
      allMarkdownRemark(
          filter: {
            frontmatter: {type: {eq: "article"}}
          }
        ) 
        {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const resultProjects = await graphql(`
    query {
      allMarkdownRemark(
          filter: {
            frontmatter: {type: {eq: "project"}}
          }
        ) 
        {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  resultArticles.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

  resultProjects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}