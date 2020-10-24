import React from "react";
import { FaDiscord, FaGithub, FaGitlab, FaInstagram, FaLinkedin, FaStackOverflow, FaTelegram, FaTwitter, } from "react-icons/fa";

const LinkHandler = props => {
    const getComponent = type => {
        const size = props.layout ? '24px' : '50px';
        switch (type) {
            case "Instagram":
                return <FaInstagram size={size} />;
            case "Telegram":
                return <FaTelegram size={size} />;
            case "Gitlab":
                return <FaGitlab size={size} />;
            case "Github":
                return <FaGithub size={size} />;
            case "Stackoverflow":
                return <FaStackOverflow size={size} />;
            case "Discord":
                return <FaDiscord size={size} />;
            case "Linkedin":
                return <FaLinkedin size={size} />;
            case "Twitter":
                return <FaTwitter size={size} />;
            default:
                return;
        }
    };

    return (
        <div className="handler-wrapper">
            <a href={props.handlerLink}>
                {getComponent(props.type)}
            </a>
        </div>
    );
};

export default LinkHandler;