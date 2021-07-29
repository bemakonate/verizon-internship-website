import React from 'react'
import { RiFacebookBoxLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri';
import { CgCopyright } from 'react-icons/cg';
import { FaYelp } from 'react-icons/fa';


const footer = () => {

    let footerJSX = null;

    if (businessInfo) {
        footerJSX = (
            <footer className="footer">
                <div className="global__container">
                    <div className="footer-content">
                        <h2 className="company-name">{businessInfo.companyName}</h2>
                        <div className="section__info">
                            <h3 className="section__info-title">Info</h3>
                            {businessInfo !== null && <BusinessInfo businessInfo={businessInfo} labelClass="business-info__label" />}
                        </div>

                        <div className="section__social-media">
                            <h3 className="section__social-media-title">Social Media</h3>
                            <a href={businessInfo.facebookURL} target="__blank"><RiFacebookBoxLine className="social-icon" /></a>
                            <a href={businessInfo.instagramURL} target="__blank"><RiInstagramLine className="social-icon" /></a>
                            <a href={businessInfo.yelpURL} target="__blank"><FaYelp className="social-icon" /></a>
                            <a href={businessInfo.twitterURL} target="__blank"><RiTwitterLine className="social-icon" /></a>
                        </div>
                    </div>
                    <span className="copyright-line"> <CgCopyright className="copyright-icon" /> Copyright 2021 {businessInfo.companyName} - All Rights Reserved </span>

                </div>
            </footer>
        )
    }

    return footerJSX;
}

export default footer
