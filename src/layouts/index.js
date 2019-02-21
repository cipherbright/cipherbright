import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation'
import '../css/style.css'

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
        <div className="header">
          <div className="logo-container">
            <img src="//images.ctfassets.net/4ubcz43h3w7v/1r08zza6LeopKoRtFtlfoG/f9522f072346ad116905b30ec6c243db/cipherblog.png" />
          </div>
          <Navigation />
        </div>
        {children()}
      </Container>
    )
  }
}

export default Template
