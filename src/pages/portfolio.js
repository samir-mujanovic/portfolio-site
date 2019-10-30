import React from 'react'
import Layout from '../components/layout'
import Portfolio from '../components/Portfolio/Portfolio'
import SEO from "../components/seo"

const portfolio = () => {

    return (
        <Layout>
            <SEO title="Portfolio" />
            <Portfolio />
        </Layout>
    )
}

export default portfolio
