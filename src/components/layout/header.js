import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaClock, FaCode, FaInfo } from "react-icons/fa";
import { siteData } from '../../data/siteData';

const Header = props => {
    const getIcon = (title) => {
        switch (title) {
            case '/':
                return <FaHome />;
            case '/timeline':
                return <FaClock />;
            case '/projects':
                return <FaCode />;
            case '/about':
                return <FaInfo />;
            default:
                break;
        }
    };

    return (
        <div className="header-wrapper">
            <div className="header-name">
                <h3 title={siteData.name}>{siteData.githubUsername}<span className='header-name-full'>{siteData.name}</span></h3>
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
                            {getIcon(page.link.toLowerCase())}
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