import React from 'react'
import Img from 'gatsby-image'
import styles from './hero.module.css'
import { checkPropTypes } from 'prop-types';

export default ({ bannerImage }) => (

  <div className={styles.hero}>
    {/* <Img className={styles.heroImage} alt={data.name} sizes={data.heroImage.sizes} /> */}
    
    {/* <img className="bannerImage" alt={data.name} src="https://images.unsplash.com/photo-1484706523581-25ee30e3fe03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" /> */}
    <img className="bannerImage" src={bannerImage ? bannerImage : "https://images.ctfassets.net/4ubcz43h3w7v/hzNOpwe4VZimIV2mDmFWH/58a9f20ef5942e6d394a089369a7b7a8/banner.jpg"} />

    {/* another banner https://images.unsplash.com/photo-1497348231296-713b847f4ca4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80 */}
    {/* <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div> */}
  </div>
)
