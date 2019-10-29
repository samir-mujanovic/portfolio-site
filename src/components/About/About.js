import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const getAbout = graphql`
query aboutImage {
  aboutImage: file(relativePath: {eq: "about-me-1.jpeg"}) {
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
                <div className="col-12 col-lg-5">
                    <div className="about-img">
                        <Img fluid={aboutImage.childImageSharp.fluid} alt="about-me" />
                    </div>
                </div>
                <div className="col-12 col-lg-7">
                    <h3>Frontend Developer & Designer</h3>
                    <p>
                        Hello! My name is
                        <strong> Samir Mujanovic</strong> based in Sarajevo(Bosnia and Herzegovina).
                        I'm a Frontend Developer with 3 years of experience. I describe myself as
                        a developer who loves coding, open-source and web platform.
                        Experienced with all stages of the development cycle for dynamic web projects.
                        Having an in-depth knowledge including advanced
                        <strong> HTML5, CSS3, JavaScript</strong> and working knowledge of Photoshop. Well-versed in Scrum and Agile.
                    </p>
                    <p>
                        In my spare time, I like to create and contribute to open-source projects. That helps me to
                        learn a lot of new stuff, grow as a developer and support other open-source projects. I love
                        traveling and discovering new places.
                    </p>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ul className="about-list">
                                <li>
                                    <span className="title">Name:</span>
                                    <span className="value">Samir Mujanovic</span>
                                </li>
                                <li>
                                    <span className="title">Residence:</span>
                                    <span className="value">Sarajevo, BiH</span>
                                </li>
                                <li>
                                    <span className="title">Email:</span>
                                    <span className="value">samir_mujanovic@outlook.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="about-list">
                                <li>
                                    <span className="title">Phone:</span>
                                    <span className="value">+38760 3359 422</span>
                                </li>
                                <li>
                                    <span className="title">Address:</span>
                                    <span className="value">
                                        Ilidza, 71210
                                        Sarajevo
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default About
