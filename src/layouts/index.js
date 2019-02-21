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
          <div className="footerLogo">
            <img src="https://images.ctfassets.net/4ubcz43h3w7v/4dNc9nB80vzzIT0jp69O8U/88a18eb28ce545029a3f540044b3025b/cipheroutside.png?h=250"></img>
          </div>
        </div>
        
      </Container>
    )
  }
}

export default Template
