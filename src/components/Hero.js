import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const Hero = ({ img, className, children }) => {
    return (
        <BackgroundImage className={className} fluid={img}>
            {children}
        </BackgroundImage>
    )
}

export default Hero
