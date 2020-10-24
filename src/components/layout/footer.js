import React from "react";
import SocialMedia from '../socialMedia/index';

const Footer = props => {
    return (
        <div className="footer-wrapper">
            <div className="footer-social-media">
                <SocialMedia layout />
            </div>
        </div>
    );
};

export default Footer;