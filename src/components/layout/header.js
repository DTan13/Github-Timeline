import React from 'react';
import { NavLink } from 'react-router-dom';
import { siteData } from '../../data/siteData';

const Header = props => {
    return (
        <div className="header-wrapper">
            <div className="header-name">
                <h2 title={siteData.name}>{siteData.name}</h2>
            </div>
            <div className="header-pages">
                {props.pages.map((page, index) => {
                    return (
                        <NavLink
                            exact
                            className='header-page-single'
                            activeClassName='header-page-single-active'
                            to={page.link}
                            key={`page${index}`}
                            title={page.title}
                        >
                            <span className="header-page-single-text">
                                {` ${page.title}`}
                            </span>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;