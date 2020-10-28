import Axios from 'axios';
import React, { useEffect, useState } from 'react';

import { eventList } from '../../data/siteData';
import CommitDiff from './CommitDiff';
import GoTo from '../../components/common/GoTo';

const EventSpecificDetails = props => {
    const [diff, setDiff] = useState(undefined);

    useEffect(() => {
        if (props.event.type === eventList.push) {
            Axios.get(`${props.event.repo.url}/compare/${props.event.payload.before}...${props.event.payload.head}`,
                {
                    headers: {
                        "Accept": "application/vnd.github.v3.raw.diff"
                    }
                }).then(res => {
                    setDiff(res.data);
                });
        }
        else if (props.event.type === eventList.pullreq) {
            Axios.get(`${props.event.repo.url}/compare/${props.event.payload.pull_request.base.sha}...${props.event.payload.pull_request.head.sha}`, {
                headers: {
                    "Accept": "application/vnd.github.v3.raw.diff"
                }
            }).then(res => {
                setDiff(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [props.event.repo.url]);

    return (
        <div className="event-specific-details" >
            {/* TODO Test following line! for GollumEvent */}
            {props.event.type === eventList.wiki && <GoTo link={props.event.pages[0].html_url} name="Wiki Page" />}
            {props.event.type === eventList.fork && <GoTo link={props.event.payload.forkee.html_url} name="Forked Repository" />}
            {props.event.type === eventList.create && <GoTo link={`https://github.com/${props.event.repo.name}`} name="Created Repository" />}
            {props.event.type === eventList.issues && <GoTo link={props.event.payload.issue.html_url} name="Issue" />}
            {props.event.type === eventList.pullreq && <GoTo link={props.event.payload.pull_request.html_url} name="Pull request" /> && diff && <CommitDiff diff={diff} />}
            {props.event.type === eventList.watch && <GoTo link={`https://github.com/${props.event.repo.name}`} name="Repository" />}
            {props.event.type === eventList.release && <GoTo link={props.event.payload.release.html_url} name="Release" />}
            {/* TODO Test following line! for SponsorshipEvent */}
            {props.event.type === eventList.sponsor && <GoTo link={props.event.payload.sponsor.html_url} name="Sponsored Repo" />}
            {/* TODO Test for everything below */}
            {props.event.type === eventList.issueComment && <GoTo link={props.event.payload.comment.html_url} name="Comment for Issue" />}
            {props.event.type === eventList.commitComment && <GoTo link={props.event.payload.comment.html_url} name="Comment for Commit" />}
            {props.event.type === eventList.prReview && <GoTo link={props.event.payload.comment.html_url} name="Comment for Review" />}
            {/* and above this */}
            {props.event.type === eventList.push && diff && <CommitDiff diff={diff} />}
            {props.event.then === eventList.pullreq}
        </div >);
};

export default EventSpecificDetails;