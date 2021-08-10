import React from 'react'
import Layout from '../components/layout'

const contact = () => {
    return (
        <Layout pageClassName="contactPage">
            <header className="jumbotron">
                <div className="jumbotron-content global__container">
                    <h1>Contact Us</h1>
                    <p className="jumbotron-tagline">Feel free to reach out</p>
                </div>

                <div className="contact-form">
                    <div className="input-group">
                        <label className="input-label" htmlFor="name">Name</label>
                        <input className="input-val" type="text" id="name" placeholder="Name" />
                    </div>
                    <div className="input-group">
                        <label className="input-label" htmlFor="">Email</label>
                        <input className="input-val" type="text" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <label className="input-label" htmlFor="">Job Title</label>
                        <input className="input-val" type="text" placeholder="Job Title" />
                    </div>
                    <div className="input-group">
                        <label className="input-label" htmlFor="">Company Name</label>
                        <input className="input-val" type="text" placeholder="Company Name" />
                    </div>
                    <div className="input-group">
                        <label className="input-label" htmlFor="">Message</label>
                        <textarea className="contact-message" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className="contact-btn">Contact</button>
                </div>

            </header>

        </Layout>
    )
}

export default contact
