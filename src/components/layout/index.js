import React from 'react';
import Header from './header';
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
        </div>
    );
};

export default Layout;