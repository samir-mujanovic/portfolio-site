import React from 'react'
import Title from '../Globals/Title'
import PortfolioCard from './PortfolioCard'
import { useStaticQuery, graphql } from 'gatsby'

const getPortfolio = graphql`
{
  portfolio: allContentfulPortfolio {
    edges {
      node {
        contentful_id
        name
        description
        link
        github
        img {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const Portfolio = () => {

    const response = useStaticQuery(getPortfolio);
    const portfolios = response.portfolio.edges

    return (
        <div className="portfolio">
            <div className="container-fluid no-padding">
                <Title className="portfolioHeading" title="Portfolio"></Title>
                <div className="row portfolio-items no-gutters pt-2 pt-md-5 pb-5">
                    {
                        portfolios.map(({ node }) => {
                            return (
                                <PortfolioCard key={node.contentful_id} portfolio={node} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
