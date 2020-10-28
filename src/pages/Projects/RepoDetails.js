import Axios from 'axios';
import React, { useEffect, useState } from 'react';

import { GoEye, GoIssueOpened, GoRepo, GoRepoForked, GoStar } from 'react-icons/go';

const RepoDetails = props => {
    const [forkedRepo, setForkedRepo] = useState();

    useEffect(() => {
        if (props.repo.fork) {
            Axios.get(props.repo.url).then(res => {
                setForkedRepo(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [props.repo.fork, props.repo.url]);

    return (
        <div className="repo-details">
            <div className="repo-details-top">
                <div className="repo-name">
                    <a href={props.repo.html_url}>
                        <GoRepo />{props.repo.name}
                    </a>
                    <hr />
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
                    <GoStar />{(forkedRepo && forkedRepo.parent.stargazers_count) || props.repo.stargazers_count}
                </div>
                <div className="repo-watchers">
                    <GoEye />{(forkedRepo && forkedRepo.parent.watchers_count) || props.repo.watchers_count}
                </div>
                <div className="repo-forks">
                    <GoRepoForked /> {(forkedRepo && forkedRepo.parent.forks_count) || props.repo.forks_count}
                </div>
                <div className="repo-issues">
                    <GoIssueOpened />{(forkedRepo && forkedRepo.parent.open_issues) || props.repo.open_issues}
                </div>
            </div>
        </div>
    );
};

export default RepoDetails;