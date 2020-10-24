import React from 'react';
import Header from './header';
import Footer from './footer';

import { socialMediaLinks } from '../../data/siteData';

const pages = [
    { link: '/', title: "Home" },
    { link: '/timeline', title: "TimeLine" },
    { link: '/projects', title: "Contributions" },
    { link: '/about', title: "About" },
];

const Layout = props => {
    return (
        <div className="layout-wrapper">
            <Header pages={pages} />
            {props.children}
            <Footer socialMediaLinks={socialMediaLinks} />
        </div>
    );
};

export default Layout;