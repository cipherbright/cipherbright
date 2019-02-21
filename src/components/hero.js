import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    {/* <Img className={styles.heroImage} alt={data.name} sizes={data.heroImage.sizes} /> */}
    <img alt={data.name} src="https://fencecore.com/wp-content/uploads/2018/12/blog-banner-2-2.jpg" />
    {/* <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div> */}
  </div>
)
