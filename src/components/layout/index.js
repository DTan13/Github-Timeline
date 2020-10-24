import React from 'react';

const Layout = props => {
    return (
        <div className="layout-wrapper">
            {props.children}
        </div>
    );
};

export default Layout;