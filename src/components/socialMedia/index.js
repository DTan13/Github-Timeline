import React from "react";
import { socialMediaLinks } from "../../data/socialMediaLinks";
import LinkHandler from "./linkHandler";

const SocialMedia = props => {
    return (
        <div className="social-media-wrapper">
            <br />
            <br />
            <div className="social-media-links-header">
                Don't worry! Just stay in touch!
            </div>
            <br />
            <div className="social-media-links-wrapper">
                {socialMediaLinks.map(link => {
                    return <LinkHandler type={`${Object.keys(link)[0]}`} handlerLink={link[`${Object.keys(link)}`]} />
                })}
            </div>
            <br />
        </div>
    )
}
export default SocialMedia;