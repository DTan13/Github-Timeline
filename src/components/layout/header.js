import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCode, FaUser } from "react-icons/fa";
import { siteData } from '../../data/siteData';

const Header = props => {
    const getIcon = (title) => {
        switch (title) {
            case '/home':
                return <FaHome />;
            case '/projects':
                return <FaCode />;
            case '/':
                return <FaUser />;
            default:
                break;
        }
    };

    return (
        <div className="header-wrapper">
            <div className="header-name">
                <a href={`https://github.com/${props.user || siteData.githubUsername}`}>
                    <h3 title={props.user || siteData.githubUsername}>github.com/{props.user || siteData.githubUsername}</h3>
                </a>
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