import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

export default function MetaData() {
  const { title, description, siteUrl, twitter } = useSiteMetadata()

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitter} />
    </Helmet>
  )
}
