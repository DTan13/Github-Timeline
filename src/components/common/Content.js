import React from 'react';
import Contents from './Contents';
import { FaDownload } from 'react-icons/fa';

const Content = props => {
    return (
        props.content.type === 'file' ? [<p><a href={props.content.html_url}>{props.content.name}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href={props.content.download_url}>{`${props.content.size}B`}<FaDownload /></a></p>, <hr />] : <Contents url={props.content.url} summary={props.content.name} />
    );
};

export default Content;