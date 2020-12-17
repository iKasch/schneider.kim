import React from 'react'
import { Link } from 'gatsby'
import MetaData from '../components/MetaData/MetaData'

export default function LegalDisclosure() {
  return (
    <>
      <MetaData />
      <div className="main">
        <div className="card">
          <div className="name">Legal Disclosure</div>
          <div className="intro">
            Information in accordance with Section 5 TMG
            <br />
            <br />
            Stresemannstr. 120
            <br />
            22769 Hamburg
            <br />
            <br />
            Represented by
            <br />
            <strong>Kim Schneider</strong>
            <br />
            <br />
            Contact Information
            <br />
            Telephone: +49 151 40510304
            <br />
            E-Mail: web@schneider.kim
            <br />
            Internet address: schneider.kim
            <br />
            <br />
            Disclaimer
            <br />
            Accountability for content
            <br />
            The contents of our pages have been created with the utmost care.
            However, we cannot guarantee the contents accuracy, completeness or
            topicality. According to statutory provisions, we are furthermore
            responsible for our own content on these web pages. In this matter,
            please note that we are not obliged to monitor the transmitted or
            saved information of third parties, or investigate circumstances
            pointing to illegal activity. Our obligations to remove or block the
            use of information under generally applicable laws remain unaffected
            by this as per §§ 8 to 10 of the Telemedia Act (TMG).
            <br />
            Accountability for links
            <br />
            Responsibility for the content of external links (to web pages of
            third parties) lies solely with the operators of the linked pages.
            No violations were evident to us at the time of linking. Should any
            legal infringement become known to us, we will remove the respective
            link immediately.
            <br />
            Copyright
            <br />
            Our web pages and their contents are subject to German copyright
            law. Unless expressly permitted by law, every form of utilizing,
            reproducing or processing works subject to copyright protection on
            our web pages requires the prior consent of the respective owner of
            the rights. Individual reproductions of a work are only allowed for
            private use. The materials from these pages are copyrighted and any
            unauthorized use may violate copyright laws.
          </div>
        </div>
        <Link to="/" className="footerlink">
          Back
        </Link>
      </div>
      <script
        async
        defer
        data-domain="schneider.kim"
        src="https://plausible.io/js/plausible.js"
      />
    </>
  )
}
