import React from 'react'
import Layout from '../components/layout'
import { RiInstagramLine } from 'react-icons/ri';

const index = () => {
    return (
        <Layout pageClassName="homePage">
            <header className="jumbotron">
                <div className="jumbotron-overlay">
                    <div className="jumbotron-content">
                        <div className="global__container">
                            <h1 className="jumbotron-title">Mind <br /> Matter <br /> Mentality </h1>
                        </div>

                    </div>
                </div>

                <img className="jumbotron-bg" src="https://images.unsplash.com/photo-1619950835693-12c11cfeb60d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxtZW50YWwlMjBoZWFsdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
            </header>

            <section className="mission-container">
                <div className="mission-content">
                    <h2>Company Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eligendi quas facere quisquam ex unde dignissimos dolorum provident veniam! Culpa eveniet vitae iusto, magni fuga adipisci sequi. Fugit reiciendis blanditiis illo, hic dolorum earum voluptas ab voluptatibus! Corporis nam aliquam optio doloribus distinctio similique, molestias enim odio, quaerat sit culpa voluptate sunt, sapiente eos. </p>
                </div>


                <div className="mission-img__container"><div><img className="mission-img" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbW11bml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" /></div></div>


            </section>

            <section className="skills">
                <div className="skills-container">
                    <article className="skill-container skill-communication">
                        <h3 className="skill-container__title">Communication</h3>
                        <div className="skill-fact">
                            <p className="skill-fact__stat">77%</p>
                            <p className="skill-fact__stat-desc ">Lorem ipsum dolor sit amet consectetur </p>
                        </div>
                        <p className="skill-container__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus eum nesciunt qui quasi mollitia! Omnis impedit fugit voluptatibus dolor placeat?</p>
                    </article>

                    <article className="skill-container">
                        <h3 className="skill-container__title">Empathy</h3>
                        <div className="skill-fact">
                            <p className="skill-fact__stat">25X</p>
                            <p className="skill-fact__stat-desc ">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <p className="skill-container__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem id ipsum soluta distinctio expedita eos laborum voluptatum praesentium ratione iusto voluptatibus, deserunt accusamus impedit iure. Quis eius laboriosam facere consectetur?</p>
                    </article>
                </div>
            </section>
            <div className="solution-social__row">
                <section className="solution__container">
                    <h2>Solution &amp; <br />Service</h2>
                    <img className="solution__app-icon" src="/images/app-icon.png" alt="app logo" />
                    <p>For the post-world of covid-19, your workforce needs updated solutions to adapt to the ever evolving technologies and methods we use to communicate with our co-workers and conduct business. Our solution is a app that will allow businesses to analyze the mental wellbeing of their employees. In addition, employees having the opportunity to voice their true opinions and be updated on how they can improve on the core skills, communication and empathy, which we at Mind Matter Mentality are dedicated to help solvings  </p>
                </section>

                <section className="social__container">
                    <h2 className="social-title">Connet <br /> to our <br /> Social Media</h2>
                    <p>Be updated on our latest tips and posts on how to improve your communication and empathy skills to enhance the workflow of your team</p>
                    <a href="https://instagram.com/mindmattermentality?utm_medium=copy_link" target="__blank"><RiInstagramLine className="instagram-link" /></a>
                </section>
            </div>
        </Layout>
    )
}

export default index
