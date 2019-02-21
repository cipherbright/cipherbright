import React from 'react'
import Img from 'gatsby-image'
import styles from './hero.module.css'
import { checkPropTypes } from 'prop-types';

export default ({ bannerImage }) => (

  <div className={styles.hero}>
    {/* <Img className={styles.heroImage} alt={data.name} sizes={data.heroImage.sizes} /> */}
    
    {/* <img className="bannerImage" alt={data.name} src="https://images.unsplash.com/photo-1484706523581-25ee30e3fe03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" /> */}
    <img className="bannerImage" src={bannerImage ? bannerImage : "https://fencecore.com/wp-content/uploads/2018/12/blog-banner-2-2.jpg"} />

    {/* another banner https://images.unsplash.com/photo-1497348231296-713b847f4ca4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80 */}
    {/* <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div> */}
  </div>
)
