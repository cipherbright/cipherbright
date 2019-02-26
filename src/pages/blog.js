import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div>
        <Helmet title={siteTitle}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: "https://images.ctfassets.net/4ubcz43h3w7v/5kcJAnIUYCYHSUurfUc6YK/47d4229b4d75c414f64d7c5cc18a7a9d/cipherinside.png?h=250" }
        ]}
        >
          <meta charSet="utf-8" />
          <title>Blog - Cipher Bright</title>
        </Helmet>
        {/* <div className={styles.hero}>
          Blog
        </div> */}
        <Hero bannerImage="https://images.pexels.com/photos/1549701/pexels-photo-1549701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        <h1>Blog</h1>
        <div className="wrapper">
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`
