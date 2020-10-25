import React from "react";
import { socialMediaLinks } from "../../data/siteData";
import LinkHandler from "./linkHandler";

const SocialMedia = props => {
    return (
        <div className="social-media-wrapper">
            {props.layout || <div>
                <br />
                <br />
                <div className="social-media-links-header">
                    Don't worry! Just stay in touch!
                </div>
                <br />
            </div>
            }
            <div className="social-media-links-wrapper">
                {socialMediaLinks.map(link => {
                    return <LinkHandler layout={props.layout} type={`${Object.keys(link)[0]}`} key={link[`${Object.keys(link)}`]} handlerLink={link[`${Object.keys(link)}`]} />;
                })}
            </div>
        </div>
    );
};
export default SocialMedia;