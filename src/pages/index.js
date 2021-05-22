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
            <p>
              I&apos;m a frontend engineer living in Hamburg, DE working{' '}
              <a
                href="http://twitter.com/MOIAmobility"
                rel="noreferrer"
                target="_blank"
              >
                @MOIA
              </a>{' '}
              <br />
              and a Longboard Freestyle & Dance Teamrider for{' '}
              <a
                href="https://www.studiolongboard.com/neuer-teamfahrer-kim-stellt-sich-vor/"
                rel="noreferrer"
                target="_blank"
              >
                Studio Longboard
              </a>
              .
            </p>
            <p>
              Feel free to write me an{' '}
              <a href="mailto:web@schneider.kim">email</a> or check my socials.
              ✌️
            </p>
          </div>
          <hr />
          <SvgIconLinks />
        </div>
        <Link to="legal-disclosure" className="footerlink">
          Imprint
        </Link>
      </div>
      <script
        async
        defer
        data-domain="schneider.kim"
        src="https://plausible.io/js/plausible.outbound-links.js"
      />
    </>
  )
}
