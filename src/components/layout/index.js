import React from 'react'
import Navigation from './navigation';
import Footer from './footer';


const Layout = (props) => {


    return (
        <div className="layout">
            <div className="site-content">
                <Navigation />
                <div className={props.pageClassName}>
                    {props.children}
                </div>
                <div className="footer-margin"></div>
                {/* <Footer /> */}
            </div>

        </div>
    )
}




export default Layout
