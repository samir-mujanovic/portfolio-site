import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Typer from "../Typer/Typer"

const Banner = () => {
  return (
    <div className="banner-text">
      <h1>
        Hey there !
        <br />
        I'm <span>Samir Mujanovic</span>
          <br />
            Web Developer & Designer
      </h1>
      <div className="typing-txt">
        <Typer
          heading="I create"
          dataText={[
            'Web and Graphics Design.',
            'Web Applications.',
            'Web Pages.',
          ]}
        />
      </div>
      <div className="redirect-buttons">
        <AniLink className="main-btn link mr-3" fade to="/about">
          <span className="text">About Me</span>
          <span className="hover-icon">
            <span className="lnr lnr-arrow-right"></span>
          </span>
        </AniLink>
        <AniLink className="main-btn link" fade to="/portfolio">
          <span className="text">Portfolio</span>
          <span className="hover-icon">
            <span className="lnr lnr-arrow-right"></span>
          </span>
        </AniLink>
      </div>
    </div>
  )
}

export default Banner
