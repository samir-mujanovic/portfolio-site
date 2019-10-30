import React from 'react'
import Layout from '../components/layout'
import Resume from '../components/Resume/Resume'
import SEO from "../components/seo"

const resume = () => {
    return (
        <Layout>
            <SEO title="Resume" />
            <Resume />
        </Layout>
    )
}

export default resume
