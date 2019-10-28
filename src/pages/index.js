import React from "react"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/main.scss'

export default ({ data }) => (
  <Layout>
    <Hero className="home" img={data.heroImg.childImageSharp.fluid}>
      <Banner />
    </Hero>
  </Layout>
)

export const query = graphql`
{
  heroImg: file(relativePath: {eq: "bg-img-2.jpeg"}) {
    childImageSharp {
      fluid(quality:90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
