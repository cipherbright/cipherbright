import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation'
import '../css/style.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <div className="headerOuter">
          <div className="header" style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div className="logo-container">
              <Link to="/"><img src="//images.ctfassets.net/4ubcz43h3w7v/1r08zza6LeopKoRtFtlfoG/f9522f072346ad116905b30ec6c243db/cipherblog.png" /></Link>
            </div>
            <Navigation />
          </div>
        </div>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          {children()}
        </div>
        <div className="footer">
          <div className="leftRightOuter logo-with-socials">
            <div className="container">
              <div className="left50">
                <div className="footerLogo">
                  <Link to="/"><img src="//images.ctfassets.net/4ubcz43h3w7v/1r08zza6LeopKoRtFtlfoG/f9522f072346ad116905b30ec6c243db/cipherblog.png" /></Link>
                </div>
              </div>
              <div className="right50 footer-socials">
                <a className="iconfb" target="_blank" href="https://www.facebook.com/cipherbrightblogs"><FaFacebookF /></a>
                <a className="icontw" target="_blank" href="https://twitter.com/CipherBright"><FaTwitter /></a>
                <a className="iconli" target="_blank" href="https://www.linkedin.com/company/cipherbright/"><FaLinkedinIn /></a>
                <a className="iconin" target="_blank" href="https://www.instagram.com/cipherbright_/"><FaInstagram /></a>
                <a className="iconml" href="mailto:faisalalvi33@gmail.com"><IoMdMail /></a>
              </div>
            </div>
          </div>
          <div className="disclaimer">Copyright &copy; {(new Date().getFullYear())} Cipher Bright. All rights reserved.</div>
        </div>

      </Container>
    )
  }
}

export default Template
