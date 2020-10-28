import React from "react";
import SocialMedia from '../socialMedia/index';

const Footer = props => {
    return (
        <div className="footer-wrapper">
            <div className="footer-social-media">
                <SocialMedia layout />
            </div>
            <div className='footer-visitor-count'>
                <img src="https://visitor-badge.glitch.me/badge?page_id=dtan13.dtan13.github.io" alt="Visitor Counter" />
            </div>
            <div className="footer-code">
                {`</> with ❤ `}
            </div>
        </div>
    );
};

export default Footer;