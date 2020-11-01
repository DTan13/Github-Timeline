import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommonDetails from './CommonDetails';
import Contents from '../../components/common/Contents';
import EventSpecificDetails from './EventSpecificDetails';
import RepoDetails from '../../components/common/RepoDetails';
import RepoLanguageData from '../../components/common/RepoLanguageData';

const EventDetails = props => {
    const [repodata, setRepodata] = useState();
    const [languageData, setLanguageData] = useState();

    useEffect(() => {
        Axios.get(`${props.event[0].repo.url}`, {
            headers: {
                'Authorization': `token ${process.env.REACT_APP_GITHUB_API_KEY}`
            }
        }).then(res => {
            setRepodata(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [props.event]);

    useEffect(() => {
        if (repodata) {
            Axios.get(`${repodata.languages_url}`, {
                headers: {
                    'Authorization': `token ${process.env.REACT_APP_GITHUB_API_KEY}`
                }
            }).then(res => {
                setLanguageData(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [repodata]);

    return (
        <div className="event-details">
            <button className="hide-details" onClick={props.hideDetails}>X</button>
            <CommonDetails event={props.event[0]} />
            <EventSpecificDetails event={props.event[0]} />
            <div className="content-wrapper">
                <h3>Contents</h3>
                <hr />
                <Contents repo={props.event[0].repo.url} />
            </div>
            <div className="other-details">
                {repodata && <RepoDetails repodata={repodata} />}
                {languageData && <RepoLanguageData languageData={languageData} />}
            </div>

        </div>
    );
};

export default EventDetails;