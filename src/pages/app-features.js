import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/resuable/SEO';
import axios from '../constants/axios-backend';

const AppFeatures = ({ appFeaturesPage }) => {
    return (
        <Layout pageClassName="appFeaturesPage">
            <SEO title="App Features" />
            <header className="jumbotron">
                <h1 className="jumbotron-title">App Features</h1>
                <img className="jumbotron-iphone" src="/images/phoneStarter.png" alt="" />
            </header>

            <section className="section-therapyCall feature-section">
                <div className="global__container">
                    <div className="feature-grid">
                        <div className="feature-content">
                            <h2 className="feature-title">Schedule a <br /> Therapy Call</h2>
                            <p>{appFeaturesPage.therapySectionText}</p>
                        </div>

                        <img className="therapyCall-iphone" src="/images/phoneTherapy.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="section-chats feature-section">
                <div className="global__container">
                    <div className="feature-grid">
                        <div className="feature-content">
                            <h2 className="feature-title">Drop <br /> Anoymous Chats</h2>
                            <p>{appFeaturesPage.chatsSectionText}</p>
                        </div>

                        <div>
                            <img className="chat-iphone" src="/images/phone-chats.png" alt="" />
                        </div>

                    </div>

                </div>
            </section>

            <section className="section-userData feature-section">
                <div className="global__container">
                    <div className="feature-grid">
                        <div className="feature-content">
                            <h2 className="feature-title">Unique Brain = <br /> Unique Data </h2>
                            <p>{appFeaturesPage.statusReportSectionText}</p>
                        </div>
                        <img className="data-iphone" src="/images/phone-data.png" alt="" />
                    </div>
                </div>
            </section>




        </Layout>
    )
}

export const getStaticProps = async (ctx) => {
    try {
        const res = await axios.get(`/app-features`);
        const appFeaturesPage = res.data;


        return { props: { appFeaturesPage } };
    } catch (error) {
        return { props: { error } };
    }
}


export default AppFeatures
