import React from 'react'
import { Link } from 'gatsby'
import SvgIconLinks from '../components/SvgIconLinks/SvgIconLinks'
import KimAvatar from '../assets/kim-avatar.jpg'
import MetaData from '../components/MetaData/MetaData'

export default function Home() {
  return (
    <>
      <MetaData />
      <div className="main">
        <div className="card">
          <img src={KimAvatar} alt="" className="avatar" />
          <div className="name">Kim Schneider</div>
          <div className="intro">
            I&apos;m a frontend engineer living in Hamburg, DE working{' '}
            <a
              href="http://twitter.com/MOIAmobility"
              rel="noreferrer"
              target="_blank"
            >
              @MOIA
            </a>
            .
          </div>
          <div className="intro">
            Feel free to write me an{' '}
            <a href="mailto:web@schneider.kim">email</a> or check my socials. ✌️
          </div>
          <hr />
          <SvgIconLinks />
        </div>
        <Link to="legal-disclosure" className="footerlink">
          Imprint
        </Link>
      </div>
    </>
  )
}
