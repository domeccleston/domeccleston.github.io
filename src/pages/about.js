import React from "react"
import Layout from "../components/layout"

export const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        I'm a software developer based in Sheffield, UK (though likely to be moving soon).
        I spent the last nine months training as a developer at Lambda School, prior to which I was
        studying at the University of Warwick.</p>
      <h4>About this site</h4>
      <p>This website is built using the static-site generator GatsbyJS, which
        makes it quite easy and fast to write and serve blog posts in markdown format.
      </p>
      <h4>Contact</h4>
      <p>Contact me for any reason at [myname]@gmail.com.</p>
    </Layout>
  )
}

export default AboutPage
