import React from 'react'
import Subtitle from '../Globals/Subtitle'

const Contact = () => {
    return (
        <div className="section-contact">
            <div className="container">
                <Subtitle title="Contact Form" className="mt-5 pb-4 white" style={{ color: "#fff" }} />
                <p>If You have any questions feel free to contacting me at any time.</p>
                <p>I'll try to respond as soon as a possible.</p>
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <form
                            id="contact-form"
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="input">
                                <input
                                    className="input-field cf-validate"
                                    id="cf-name"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                />
                                <span className="color-line"></span>
                            </div>
                            <div className="input">
                                <input
                                    className="input-field cf-validate"
                                    id="cf-email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                                <span className="color-line"></span>
                            </div>
                            <div className="input">
                                <textarea
                                    className="input-field cf-validate"
                                    id="cf-message"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    required
                                ></textarea>
                                <span className="color-line"></span>
                            </div>
                            <div className="submit-button mt-2">
                                <button type="submit" className="green-btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
