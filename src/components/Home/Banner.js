import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaUser, FaClipboardList } from "react-icons/fa"

const Banner = () => {
  return (
    <div className="banner-text">
      <h4>Hi There !</h4>
      <h2>
        <span>I'm </span> Samir Mujanovic
      </h2>
      <p>
        I'm Frontend Developer & Graphics Designer focused on creating clean &
        user‑friendly experiences...
      </p>
      <div className="redirect-buttons">
        <AniLink className="main-btn link mr-3" fade to="/about">
          <span className="text">More About Me</span>
          <span className="hover-icon">
            <FaUser />
          </span>
        </AniLink>
        <AniLink className="main-btn link" fade to="/portfolio">
          <span className="text">Portfolio</span>
          <span className="hover-icon">
            <FaClipboardList />
          </span>
        </AniLink>
      </div>
    </div>
  )
}

export default Banner
