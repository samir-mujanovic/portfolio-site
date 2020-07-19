import React from 'react'
import Title from '../Globals/Title'
import PortfolioCard from './PortfolioCard'
import { useStaticQuery, graphql } from 'gatsby'

const getPortfolio = graphql`
{
  portfolio: allContentfulPortfolio(sort:{fields:createdAt, order: DESC}) {
    edges {
      node {
        contentful_id
        name
        description
        link
        github
        images {
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
      <div className="container-fluid">
        <Title className="portfolioHeading" title="Portfolio" />
        <div className="row portfolio-items pt-1 pt-md-3 pb-3">
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
