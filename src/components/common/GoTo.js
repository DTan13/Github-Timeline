import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const GoTo = props => {
    return <div className="external-link">
        <a href={props.link}><FaExternalLinkAlt /> : {props.name} </a>
    </div>;
};

export default GoTo;