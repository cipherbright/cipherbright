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
        <Helmet title={siteTitle}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: "https://images.ctfassets.net/4ubcz43h3w7v/5kcJAnIUYCYHSUurfUc6YK/47d4229b4d75c414f64d7c5cc18a7a9d/cipherinside.png?h=250" }
        ]}
        >
          <meta charSet="utf-8" />
          <title>About Us - Cipher Bright</title>
        </Helmet>
        <Hero bannerImage="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
        <h1>About Us</h1>
        <div className="wrapper">
            <div className="leftRightOuter">
                <div className="leftSide">
                    <img src="https://avatars3.githubusercontent.com/u/25176325?s=400&v=4" />
                </div>
                <div className="rightSide">
                    <p>Cipher Bright is a platform through which you can be more productive and be updated with the latest trends in internet technology.</p>
                    <p>It gives BRIGHTness to the Lives!</p>

                    <i>Run with us!</i><br />
                    <i>Grow with us!</i><br />
                    <i>Win with us!</i>

                    <hr />

                    <p><b>FAISAL ALVI</b><br />FOUNDER</p>

                    <p><b>Vision</b></p>
                    <p>As a founder of Cipher Bright, Faisal has set "The Vision" of Cipher Bright is to use the latest/trending Web Technology to help people all around the world!</p>

                    <p><b>Mission</b></p>
                    <p>"The Mission" of Cipher Bright is to focus and find BRIGHTest solutions of any kind of problems and serve it to the world in the form of Web Content.</p>

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
