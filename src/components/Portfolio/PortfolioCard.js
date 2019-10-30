import React from 'react'
import Img from 'gatsby-image'
import { FaGithub } from 'react-icons/fa'

const PortfolioCard = ({ portfolio }) => {
    const { name, description, img, link, github } = portfolio;
    return (
        <div className="col-12 col-lg-4 item">
            <div className="img-wrap">
                <figure>
                    <Img fluid={img.fluid} className="img-fluid" alt="portfolio-img" />
                    <figcaption>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href={github} className="github-link" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a className="image-link" href={link} target="_blank" rel="noopener noreferrer">View More</a>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default PortfolioCard
