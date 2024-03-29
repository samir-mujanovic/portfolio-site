import React from 'react'
import Layout from '../components/layout'
import Title from '../components/Globals/Title'
import About from '../components/About/AboutComponent'
import Contact from '../components/Contact/ContactComponent'
import SEO from "../components/seo"

const about = () => {
    return (
        <Layout>
            <SEO title="About" />
            <div className="about">
                <div className="container">
                    <Title className="aboutHeading" title="About Me" />
                    <About />
                </div>
                <Contact />
            </div>
        </Layout>
    )
}

export default about
