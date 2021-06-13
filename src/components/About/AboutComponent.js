import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const getAbout = graphql`
query aboutImage {
  aboutImage: file(relativePath: {eq: "Programming-pana.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const About = () => {
    const { aboutImage } = useStaticQuery(getAbout);
    return (
        <>
            <div className="row about-info">
                <div className="col-12 col-lg-6">
                    <div className="about-img">
                        <Img fluid={aboutImage.childImageSharp.fluid} alt="about-me" />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <h5>Hello, I'm Samir Mujanovic</h5>
                    <h1>I'm In The Web Development Industry <span>With 2+ Years</span> Of Experience.</h1>
                    <p>Hello! My name is <b>Samir Mujanovic</b> based in Sarajevo(Bosnia and Herzegovina).
                        I describe myself as a developer who loves coding, open-source and web platform.
                        Experienced with all stages of the development cycle for dynamic web projects.
                        Having an in-depth knowledge including advanced <b>HTML5, CSS3, JavaScript</b> and working knowledge of <b>Photoshop</b>.
                        Well-versed in <b>Scrum and Agile</b>.
                    </p>
                    <p>In my spare time, I like to create and contribute to <b>open-source</b> projects. That helps me to learn
                        a lot of new stuff, grow as a developer and support other open-source projects.
                        I love traveling and discovering new places.
                    </p>
                </div>
            </div>
        </>
    )
}


export default About
