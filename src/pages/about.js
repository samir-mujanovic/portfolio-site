import React from 'react'
import Layout from '../components/layout'
import Title from '../components/Globals/Title'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

const about = () => {
    return (
        <Layout>
            <div className="about">
                <div className="container">
                    <Title className="aboutHeading" title="About" />
                    <About />
                </div>
                <Contact />
            </div>
        </Layout>
    )
}

export default about
