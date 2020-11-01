import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Contents from '../../components/common/Contents';
import RepoLanguageData from '../../components/common/RepoLanguageData';
import RepoDetails from './RepoDetails';

const RepoStats = props => {
    const [languageData, setLanguageData] = useState();

    useEffect(() => {
        Axios.get(`${props.repo.languages_url}`, {
            headers: {
                'Authorization': `token ${process.env.REACT_APP_GITHUB_API_KEY}`
            }
        }).then(res => {
            setLanguageData(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [props.repo]);

    return (
        <div className="repo-stats">
            <button onClick={props.selectRepo}>X</button>
            <div className="repo-stats-top">
                <RepoDetails stats repo={props.repo} />
                {languageData && [<hr />, <RepoLanguageData stats languageData={languageData} />]}
            </div>
            <div className="repo-stats-mid">
                {/* TODO Add more details*/}
            </div>
            <div className="repo-stats-bottom">
                <div className="content-wrapper">
                    <h3>Contents</h3>
                    <hr />
                    <Contents repo={props.repo.url} />
                </div>
            </div>
        </div>
    );
};

export default RepoStats;