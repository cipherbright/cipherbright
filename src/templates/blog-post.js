import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    
    return (
      <div>
        <Helmet title={`${post.title} | ${siteTitle}`}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: "https://images.ctfassets.net/4ubcz43h3w7v/5kcJAnIUYCYHSUurfUc6YK/47d4229b4d75c414f64d7c5cc18a7a9d/cipherinside.png?h=250" }
        ]}
        >
          <meta charSet="utf-8" />
          <title>{`${post.title} | The Bright Webs`}</title>
        </Helmet>
        <div className={heroStyles.hero}>
          <Img className="bannerImage" alt={post.title} sizes={post.heroImage.sizes} />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
