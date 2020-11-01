import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { siteData } from '../../data/siteData';
import RepoDetails from './RepoDetails';
import RepoStats from './RepoStats';

const Projects = props => {
    const [selectedRepo, selectRepo] = useState(undefined);
    const [repoList, setRepoList] = useState([]);

    useEffect(() => {
        Axios.get(`https://api.github.com/users/${props.user || siteData.githubUsername}/repos`, {
            headers: {
                'Authorization': `token ${process.env.REACT_APP_GITHUB_API_KEY}`
            }
        }).then(res => {
            setRepoList(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [props.user]);
    return (
        <div className="projects-wrapper">
            {!selectedRepo && <div>
                <h2>Projects</h2>
                <hr />
                <div className="projects">
                    {repoList && repoList.map(repo => repo.fork ? null : <RepoDetails key={repo.id} repo={repo} selectRepo={() => { selectRepo(repo.id); }} />)}
                </div>
                <h2>Contributions</h2>
                <hr />
                <div className="projects">
                    {repoList && repoList.map(repo => repo.fork ? <RepoDetails key={repo.id} repo={repo} selectRepo={() => { selectRepo(repo.id); }} /> : null)}
                </div>
            </div>}
            {selectedRepo && <RepoStats selectRepo={() => { selectRepo(undefined); }} repo={repoList.filter(repo => repo.id === selectedRepo)[0]} />}
        </div>
    );
};

export default Projects;