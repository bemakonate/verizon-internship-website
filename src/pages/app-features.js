import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/resuable/SEO';
import axios from '../constants/axios-backend';


const appFeaturesPage = {
    therapySectionText: "Users will have the ability to build deeper connections through the use of anonymous chats with their co-workers. The use of anonymous chats will ensure that our users feel safe when expressing their true feelings and make sure the team is aware of their teammates' situations and hardships. Thus enhancing empathy, a core skill we are focused on improving. And building communication, another skill we value at Mind Matter Mentality.",
    chatsSectionText: "Employees will also have the ability to access an online therapist through our platform to manage their mental health. Having a therapist readily available to them through a mobile device allows the employees easy accessibility to have a safe space to talk and the chance to release stress.",
    statusReportSectionText: "Employees will also have the ability to view specific core metrics to improve their productivity and work life balance to make sure they are performing at their maximum capacity. This will give employers more insight on how to improve their workforce and see if they are properly taking care of the employees mental health.",
}
const AppFeatures = (props) => {
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

// export const getStaticProps = async (ctx) => {
//     try {
//         const res = await axios.get(`/app-features`);
//         const appFeaturesPage = res.data;


//         return { props: { appFeaturesPage } };
//     } catch (error) {
//         return { props: { error } };
//     }
// }


export default AppFeatures
