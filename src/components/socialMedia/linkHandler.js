import React from "react";
import { FaDiscord, FaGithub, FaGitlab, FaInstagram, FaLinkedin, FaStackOverflow, FaTelegram, FaTwitter, } from "react-icons/fa";

const LinkHandler = props => {
    const getComponent = type => {
        console.log(type);
        switch (type) {
            case "Instagram":
                return <FaInstagram size='50px' />
            case "Telegram":
                return <FaTelegram size='50px' />
            case "Gitlab":
                return <FaGitlab size='50px' />
            case "Github":
                return <FaGithub size='50px' />
            case "Reddit":
                return <FaRedditAlien size='50px' />
            case "Stackoverflow":
                return <FaStackOverflow size='50px' />
            case "Discord":
                return <FaDiscord size='50px' />
            case "Linkedin":
                return <FaLinkedin size='50px' />
            case "Twitter":
                return <FaTwitter size='50px' />
            default:
                return;
        }
    }

    return (
        <div className="handler-wrapper">
            <a href={props.handlerLink}>
                {getComponent(props.type)}
            </a>
        </div>
    )
}

export default LinkHandler;