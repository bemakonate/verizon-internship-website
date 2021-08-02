import React from 'react'
import Layout from '../components/layout'
import { RiInstagramLine } from 'react-icons/ri';
import SEO from '../components/resuable/SEO';
import LoadingBackdrop from '../components/resuable/loadingBackdrop';
import axios from '../constants/axios-backend';

const Index = ({ homePage }) => {


    return (
        <Layout pageClassName="homePage">
            <SEO title="Home" />
            <header className="jumbotron">
                <div className="jumbotron-overlay">
                    <div className="jumbotron-content">
                        <div className="global__container">
                            <h1 className="jumbotron-title">Mind <br /> Matter <br /> Mentality </h1>
                        </div>
                        <a href={homePage.socialMediaLink} target="__blank"><RiInstagramLine className="jumbotron-social" /></a>
                    </div>

                </div>

                <img className="jumbotron-bg" src="https://images.unsplash.com/photo-1619950835693-12c11cfeb60d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxtZW50YWwlMjBoZWFsdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
            </header>

            <section className="mission-container">
                <div className="mission-content">
                    <h2 className="mission-title">Company Mission</h2>
                    <p>{homePage.missionSection.content} </p>
                </div>


                <div className="mission-img__container"><div><img className="mission-img" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbW11bml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" /></div></div>


            </section>

            <section className="skills">
                <div className="skills-container">
                    <article className="skill-container skill-communication">
                        <h3 className="skill-container__title">{homePage.skill1.title}</h3>
                        <div className="skill-fact">
                            <p className="skill-fact__stat">{homePage.skill1.skillStatistic}</p>
                            <p className="skill-fact__stat-desc ">{homePage.skill1.skillStatisticLabel} </p>
                        </div>
                        <p className="skill-container__desc">{homePage.skill1.skillContent}</p>
                    </article>

                    <article className="skill-container skill-empathy">
                        <h3 className="skill-container__title">{homePage.skill2.title}</h3>
                        <div className="skill-fact">
                            <p className="skill-fact__stat">{homePage.skill2.skillStatistic}</p>
                            <p className="skill-fact__stat-desc ">{homePage.skill2.skillStatisticLabel} </p>
                        </div>
                        <p className="skill-container__desc">{homePage.skill2.skillContent}</p>
                    </article>
                </div>
            </section>
            <div className="solution-social__row">
                <section className="solution__container">
                    <h2 className="solution-title">Solution &amp; <br />Service</h2>
                    <img className="solution__app-icon" src="/images/app-icon.png" alt="app logo" />
                    <p>{homePage.solutionSection.content}</p>
                </section>

                <section className="social__container">
                    <h2 className="social-title">Connect <br /> to our <br /> Social Media</h2>
                    <p>{homePage.socialMediaSection.content}</p>
                    <a href={homePage.socialMediaLink} target="__blank"><RiInstagramLine className="instagram-link" /></a>
                </section>
            </div>
        </Layout>
    )
}

export const getStaticProps = async (ctx) => {
    try {
        const res = await axios.get(`/home-page`);
        const homePage = res.data;

        return { props: { homePage } };
    } catch (error) {
        return { props: { error } };
    };

}

export default Index
