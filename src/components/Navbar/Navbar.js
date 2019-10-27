import React, { Component } from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { FaHome, FaUser, FaClipboardList, FaBriefcase, FaLinkedinIn, FaSkype, FaGithub } from 'react-icons/fa'

class Navbar extends Component {
    state = {
        isActive: false
    }

    toggleClass = () => {
        const currentState = this.state.isActive;
        this.setState({
            isActive: !currentState
        })
    }

    render() {
        return (
            <nav className="navbar-main">
                <div className={`navbar-button ${this.state.isActive ? 'is-active' : null}`} onClick={this.toggleClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`nav-menu ${this.state.isActive ? 'is-active-menu' : null}`}>
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src="/img/logo.png" className="img-fluid" alt="" />
                        </Link>
                        <h2>Samir Mujanovic</h2>
                        <p>Front-end Developer</p>
                    </div>
                    <div className="menu-holder">
                        <ul className="primary-menu">
                            <li className="nav-menu-item">
                                <Link to="/" className="navbar-item" activeClassName="link-active">
                                    <FaHome /> <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to="/about" className="navbar-item" activeClassName="link-active">
                                    <FaUser /> <span>About</span>
                                </Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to="/resume" className="navbar-item" activeClassName="link-active">
                                    <FaClipboardList /> <span>Resume</span>
                                </Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to="/portfolio" className="navbar-item" activeClassName="link-active">
                                    <FaBriefcase /> <span>Portfolio</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="social-links">
                        <a
                            className="social-link"
                            to="https://www.linkedin.com/in/samir-mujanovic"
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
