import React from 'react'
import Subtitle from '../Globals/Subtitle'

const Contact = () => {
    return (
        <div className="section-contact">
            <div className="container">
                <Subtitle title="Contact Form" className="my-5" />
                <div className="row mt-4">
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
                                    v-model="form.name"
                                    required
                                />
                            </div>
                            <div className="input">
                                <input
                                    className="input-field cf-validate"
                                    id="cf-email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    v-model="form.email"
                                    required
                                />
                            </div>
                            <div className="input">
                                <textarea
                                    className="input-field cf-validate"
                                    id="cf-message"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    v-model="form.message"
                                    required
                                ></textarea>
                            </div>
                            <div className="response"></div>
                            <div className="submit-button mt-2">
                                <button className="main-btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
