import React from 'react';
import SocialMedia from './socialMedia';
import logo from '../logo.svg';

const ComingSoon = props => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>
                Coming Soon!
            </h2>
            <br />
            <a href="https://github.com/dtan13/dtan13.github.io">Check Progress</a>
            <SocialMedia />
            {/* <img src="https://visitor-badge.glitch.me/badge?page_id=dtan13.dtan13.github.io" alt="Visitor Counter" /> */}
        </header>
    );
};
export default ComingSoon;