import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  FaLinkedinIn,
  FaSkype,
  FaGithub,
} from "react-icons/fa"

class Navbar extends Component {
  state = {
    isActive: false,
  }

  toggleClass = () => {
    const currentState = this.state.isActive
    this.setState({
      isActive: !currentState,
    })
  }

  render() {
    return (
      <nav className="navbar-main">
        <div
          className={`navbar-button ${
            this.state.isActive ? "is-active" : null
          }`}
          onClick={this.toggleClass}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`nav-menu ${
            this.state.isActive ? "is-active-menu" : null
          }`}
        >
          <div className="navbar-logo">
            <AniLink fade to="/">
              <h2>SM</h2>
            </AniLink>
          </div>
          <div className="menu-holder">
            <ul className="primary-menu">
              <li className="nav-menu-item">
                <AniLink
                  fade
                  to="/"
                  className="navbar-item"
                  activeClassName="link-active"
                >
                  <span className="lnr lnr-home"></span> <span className="title">Home</span>
                </AniLink>
              </li>
              <li className="nav-menu-item">
                <AniLink
                  fade
                  to="/about"
                  className="navbar-item"
                  activeClassName="link-active"
                >
                  <span className="lnr lnr-user"></span> <span className="title">About</span>
                </AniLink>
              </li>
              <li className="nav-menu-item">
                <AniLink
                  fade
                  to="/resume"
                  className="navbar-item"
                  activeClassName="link-active"
                >
                  <span className="lnr lnr-book"></span> <span className="title">Resume</span>
                </AniLink>
              </li>
              <li className="nav-menu-item">
                <AniLink
                  fade
                  to="/portfolio"
                  className="navbar-item"
                  activeClassName="link-active"
                >
                  <span className="lnr lnr-briefcase"></span> <span className="title">Portfolio</span>
                </AniLink>
              </li>
            </ul>
          </div>

          <div className="social-links">
            <div className="social-title">Contact Links</div>
            <div className="links">
              <a
                className="social-link"
                href="https://www.linkedin.com/in/samir-mujanovic"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="social-link"
                href="skype:sameer.xxxxx?userinfo"
                aria-label="Skype"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSkype />
              </a>
              <a
                className="social-link"
                href="https://github.com/sameerrM"
                aria-label="Github"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="copy">
            <p>Copyright &copy; {new Date().getFullYear()}</p>
            <p>All rights Reserved</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
