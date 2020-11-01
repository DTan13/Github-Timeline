import Axios from 'axios';
import React, { useEffect, useState } from 'react';

import { GoEye, GoIssueOpened, GoRepo, GoRepoForked, GoStar } from 'react-icons/go';

const RepoDetails = props => {
    const [forkedRepo, setForkedRepo] = useState();

    useEffect(() => {
        if (props.repo.fork) {
            Axios.get(props.repo.url, {
                headers: {
                    'Authorization': `token ${process.env.REACT_APP_GITHUB_API_KEY}`
                }
            }).then(res => {
                setForkedRepo(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [props.repo.fork, props.repo.url]);

    return (
        <div className="repo-details" onClick={props.selectRepo}>
            <div className="repo-details-top">
                <div className="repo-name">
                    <a href={props.repo.html_url}>
                        <GoRepo />{props.repo.name}
                    </a>
                    {props.repo.fork && <hr />}
                    {props.repo.fork === true && forkedRepo && <p><GoRepoForked /> <a href={forkedRepo.parent.html_url}>{forkedRepo.parent.full_name}</a></p>}
                </div>
                <div className="repo-created">
                    {(new Date(Date.parse(props.repo.created_at))).toLocaleDateString()}
                </div>
            </div>
            <hr />
            <div className="repo-details-mid">
                {props.repo.description && <p>{props.repo.description}</p>}
            </div>
            <div className="repo-details-bottom">
                <div className="repo-stars">
                    {props.stats ? <a href={`${props.repo.html_url}/stargazers`}><GoStar />&nbsp;{(forkedRepo && forkedRepo.parent.stargazers_count) || props.repo.stargazers_count}</a> : <span><GoStar />{(forkedRepo && forkedRepo.parent.stargazers_count) || props.repo.stargazers_count}</span>}
                </div>
                <div className="repo-watchers">
                    {props.stats ? <a href={`${props.repo.html_url}/watchers`}><GoEye />&nbsp;{(forkedRepo && forkedRepo.parent.watchers_count) || props.repo.watchers_count}</a> : <span><GoEye />{(forkedRepo && forkedRepo.parent.watchers_count) || props.repo.watchers_count}</span>}
                </div>
                <div className="repo-forks">
                    {props.stats ? <a href={`${props.repo.html_url}/network/members`}><GoRepoForked />&nbsp; {(forkedRepo && forkedRepo.parent.forks_count) || props.repo.forks_count}</a> : <span><GoRepoForked /> {(forkedRepo && forkedRepo.parent.forks_count) || props.repo.forks_count}</span>}
                </div>
                <div className="repo-issues">
                    {props.stats ? <a href={`${props.repo.html_url}/issues`}><GoIssueOpened />&nbsp;{(forkedRepo && forkedRepo.parent.open_issues) || props.repo.open_issues}</a> : <span><GoIssueOpened />{(forkedRepo && forkedRepo.parent.open_issues) || props.repo.open_issues}</span>}
                </div>
            </div>
        </div>
    );
};

export default RepoDetails;