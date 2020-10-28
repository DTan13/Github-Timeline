import React from 'react';

import { eventList } from '../../data/siteData';

const getEventDesc = gitEvent => {
    switch (gitEvent) {
        case eventList.create:
            return " Created a Repository : ";
        case eventList.issueComment:
            return " Commented on Issue ";
        case eventList.reviewComment:
            return " Commented on Review ";
        case eventList.commitComment:
            return " Commented on Commit ";
        case eventList.delete:
            return " Deleted the Repository ";
        case eventList.fork:
            return " Forked a Repository ";
        case eventList.issues:
            return " Opened a Issue in Repository";
        case eventList.pullreq:
            return " Created a Pull Request at ";
        case eventList.push:
            return " Pushed to Repository ";
        case eventList.member:
            return " Added member to Organization";
        case eventList.wiki:
            return " Added to Wiki ";
        case eventList.release:
            return " Released new version of ";
        case eventList.watch:
            return " Started Watching the Repository ";
        case eventList.prReview:
            return " Requested Review on Pull Request at ";
        default:
            break;
    }
};

const CommonDetails = props => {
    const avatar = props.event.org ? props.event.org.avatar_url : props.event.actor.avatar_url;
    return (
        <div className="common-details">
            <div className="common-details-info">
                <div className="common-details-info-title">
                    {`${props.event.actor.login} ${getEventDesc(props.event.type)} `}
                    <a href={`https://github.com/${props.event.repo.name}`}>{props.event.repo.name.split('/')[1]}</a>
                </div>
                <div className="common-details-info-title">{props.event.repo.name}</div>
                <div className="common-details-info-time">
                    {(new Date(Date.parse(props.event.created_at))).toUTCString()}
                </div>
            </div>
            <div className="common-details-avatar">
                <img src={avatar} alt={props.event.actor.display_login} />
            </div>
        </div>
    );
};

export default CommonDetails;