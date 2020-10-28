import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaClock } from 'react-icons/fa';
import { GoIssueOpened, GoRepo, GoRepoForked, GoStar } from 'react-icons/go';

const RepoDetails = props => {
    return (
        <div className="repo-details">
            <h3>Repository Details</h3>
            <hr />
            <div className="repo-details-general">
                <div className="repo-details-info">
                    <div className="repo-details-name">
                        <GoRepo /> :<a href={props.repodata.html_url}>{props.repodata.name}</a>
                    </div>
                    <div className="repo-details-owner">
                        <AiOutlineUser />: <a href={props.repodata.owner.html_url}>{props.repodata.owner.login}</a>
                    </div>
                    <div className="repo-details-created">
                        < FaClock />: {(new Date(Date.parse(props.repodata.created_at))).toDateString()}
                    </div>
                </div>
                <div className="repo-details-extra">
                    <div className="repo-details-extra-stars">
                        <a href={`${props.repodata.html_url}/stargazers`}>
                            <GoStar /> : {props.repodata.stargazers_count}
                        </a>
                    </div>
                    <div className="repo-details-extra-issues">
                        <a href={`${props.repodata.html_url}/issues`}>
                            <GoIssueOpened /> : {props.repodata.open_issues}
                        </a>
                    </div>
                    <div className="repo-details-extra-forks">
                        <a href={`${props.repodata.html_url}/forks`}>
                            <GoRepoForked /> : {props.repodata.forks_count}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepoDetails;