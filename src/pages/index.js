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
          <div className="name">
            Hi, I&apos;m Kim{' '}
            <span role="img" aria-label="waving hi">
              👋
            </span>
          </div>
          <div className="intro">
            <p>
              I live in Hamburg, germany and work for{' '}
              <a href="http://moia.io" rel="noreferrer" target="_blank">
                @MOIA
              </a>{' '}
              as a frontend engineer and help out over at{' '}
              <a
                href="https://postmitherz.org"
                rel="noreferrer"
                target="_blank"
              >
                Post mit Herz
              </a>
              .
            </p>
            <p>
              I also do Longboard Freestyle & Dance as a Teamrider for{' '}
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
