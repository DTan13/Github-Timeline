import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { siteData } from '../../data/siteData';
import RepoDetails from './RepoDetails';

const Projects = props => {
    const [repoList, setRepoList] = useState([]);

    useEffect(() => {
        Axios.get(`https://api.github.com/users/${props.user || siteData.githubUsername}/repos`).then(res => {
            setRepoList(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [props.user]);
    return (
        <div className="projects-wrapper">
            <h2>Projects</h2>
            <hr />
            <div className="projects">
                {repoList && repoList.map(repo => repo.fork ? null : <RepoDetails repo={repo} />)}
            </div>
            <h2>Contributions</h2>
            <hr />
            <div className="projects">
                {repoList && repoList.map(repo => repo.fork ? <RepoDetails repo={repo} /> : null)}
            </div>
        </div>
    );
};

export default Projects;