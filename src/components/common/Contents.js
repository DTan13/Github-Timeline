import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Content from './Content';

const Contents = props => {
    const [repoContents, setRepoContents] = useState([]);

    useEffect(() => {
        if (props.repo) {
            Axios.get(`${props.repo}/contents`, {
                headers: {
                    'Authorization': `token ${process.env.REACT_APP_GITHUB_API_KEY}`
                }
            }).then(res => {
                setRepoContents(res.data);
            }).catch(err => {
                console.log(err);
            });
        } else {
            Axios.get(props.url, {
                headers: {
                    'Authorization': `token ${process.env.REACT_APP_GITHUB_API_KEY}`
                }
            }).then(res => {
                setRepoContents(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [props.repo, props.url]);

    return (
        <details className='content-list'>
            {props.repo !== undefined && <summary>Files :     Click to expand </summary>}
            {props.summary && <summary>{`${props.summary}`}</summary>}
            {repoContents && repoContents.map(content => <Content key={content.id} content={content} />)}
        </details>
    );
};

export default Contents;