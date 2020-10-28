import React from 'react';
import Header from './header';
import Footer from './footer';

import { socialMediaLinks } from '../../data/siteData';

const pages = [
    { link: '/home', title: "Home" },
    { link: '/projects', title: "Projects" },
    { link: '/', title: "User" },
];

const Layout = props => {
    return (
        <div className="layout-wrapper">
            <Header user={props.user} pages={pages} />
            {props.children}
            <Footer socialMediaLinks={socialMediaLinks} />
        </div>
    );
};

export default Layout;