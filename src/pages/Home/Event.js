import React from 'react';
import { FaArrowRight, FaWikipediaW } from 'react-icons/fa';
import { GoCommentDiscussion, GoEye, GoGitPullRequest, GoIssueOpened, GoPackage, GoRepo, GoRepoClone, GoRepoPush, GoSync } from "react-icons/go";
import { AiOutlineDelete, AiOutlineUser } from "react-icons/ai";
import { eventList } from '../../data/siteData';

const Event = props => {
    const getEventIcon = gitEvent => {
        switch (gitEvent) {
            case eventList.create:
                return <GoRepo />;
            case eventList.issueComment:
            case eventList.reviewComment:
            case eventList.commitComment:
                return <GoCommentDiscussion />;
            case eventList.delete:
                return <AiOutlineDelete />;
            case eventList.fork:
                return <GoRepoClone />;
            case eventList.issues:
                return <GoIssueOpened />;
            case eventList.pullreq:
                return <GoGitPullRequest />;
            case eventList.push:
                return <GoRepoPush />;
            case eventList.member:
                return <AiOutlineUser />;
            case eventList.wiki:
                return <FaWikipediaW />;
            case eventList.release:
                return <GoPackage />;
            case eventList.watch:
                return <GoEye />;
            case eventList.prReview:
                return <GoSync />;
            default:
                break;
        }
    };
    const getEventDesc = gitEvent => {
        switch (gitEvent) {
            case eventList.create:
                return "Created Repository";
            case eventList.issueComment:
            case eventList.reviewComment:
            case eventList.commitComment:
                return "Added a comment";
            case eventList.delete:
                return "Deleted Repository";
            case eventList.fork:
                return "Forked Repository";
            case eventList.issues:
                return "Opened a Issue";
            case eventList.pullreq:
                return "Created a Pull Request";
            case eventList.push:
                return "Pushed to Repository";
            case eventList.member:
                return "Added member to Repository";
            case eventList.wiki:
                return "Added to Wiki";
            case eventList.release:
                return "Released new version";
            case eventList.watch:
                return "Started Watching";
            case eventList.prReview:
                return "Requested Review";
            default:
                break;
        }
    };

    return (
        <div className="event-wrapper" onClick={props.onClick}>
            <div className="event-content">
                <div className="event-content-title">
                    <span className="event-icon">{getEventIcon(props.event.type)}</span>{getEventDesc(props.event.type)}
                </div>
                <div className="event-content-repo">
                    {props.event.repo.name}
                </div>
                {/* <div className="event-content-time">
                    {(new Date(Date.parse(props.event.created_at))).toUTCString()}
                </div> */}
            </div>
            <div className='event-reveal-icon'>
                <FaArrowRight />
            </div>
        </div>
    );
};

export default Event;