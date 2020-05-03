import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Home/Hero"
import Banner from "../components/Home/Banner"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/main.scss"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero className="home" img={data.heroImg.childImageSharp.fluid}>
      <Banner />
    </Hero>
  </Layout>
)

export const query = graphql`
  {
    heroImg: file(relativePath: { eq: "bgImg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
