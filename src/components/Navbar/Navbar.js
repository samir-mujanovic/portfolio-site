import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaLinkedinIn, FaSkype, FaGithub } from "react-icons/fa"
import Me from "../../images/me.jpg"

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
            <div className="image-holder">
              <img src={Me} alt="me" />
            </div>
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
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </span>
                  <span className="title">Home</span>
                </AniLink>
              </li>
              <li className="nav-menu-item">
                <AniLink
                  fade
                  to="/about"
                  className="navbar-item"
                  activeClassName="link-active"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="title">About</span>
                </AniLink>
              </li>
              <li className="nav-menu-item">
                <AniLink
                  fade
                  to="/resume"
                  className="navbar-item"
                  activeClassName="link-active"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </span>
                  <span className="title">Resume</span>
                </AniLink>
              </li>
              <li className="nav-menu-item">
                <AniLink
                  fade
                  to="/portfolio"
                  className="navbar-item"
                  activeClassName="link-active"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </span>
                  <span className="title">Portfolio</span>
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
