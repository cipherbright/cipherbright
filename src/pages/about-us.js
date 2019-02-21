import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class AboutUs extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    
    return (
      <div>
        <Helmet title={siteTitle} />
        <Hero bannerImage="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
        <h1>About Us</h1>
        <div className="wrapper">
            <div className="leftRightOuter">
                <div className="leftSide">
                    <img src="https://avatars3.githubusercontent.com/u/25176325?s=400&v=4" />
                </div>
                <div className="rightSide">
                    <p>You are currently in a blogging site which provides latest blogs which are needs of people.</p>

                    <p>If you are a Beginner in something new, you are on the correct location. Just find out the best solution which suits you!</p>

                    <p>Founder of The Cipher Bright: <b>Faisal Alvi.</b></p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default AboutUs

export const pageQuery = graphql`
  query HomeQuery {
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
