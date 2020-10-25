import React from 'react';
import { FaArrowRight, FaWikipediaW } from 'react-icons/fa';
import { GoCommentDiscussion, GoEye, GoGitPullRequest, GoIssueOpened, GoPackage, GoRepo, GoRepoClone, GoRepoPush, GoSync } from "react-icons/go";
import { AiOutlineDelete, AiOutlineUser } from "react-icons/ai";

const eventList = {
    create: 'CreateEvent',
    commitComment: 'CommitCommentEvent',
    delete: 'DeleteEvent',
    fork: 'ForkEvent',
    wiki: 'GollumEvent',
    issueComment: 'IssueCommentEvent',
    issues: 'IssuesEvent',
    member: 'MemberEvent',
    public: 'PublicEvent',
    pullreq: 'PullRequestEvent',
    reviewComment: 'PullRequestReviewCommentEvent',
    push: 'PushEvent',
    release: 'ReleaseEvent',
    sponsor: 'SponsorshipEvent',
    watch: 'WatchEvent',
    prReview: 'PullRequestReviewEvent'
};

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
    return (
        <div className="event-wrapper">
            <div className="event-icon">
                {getEventIcon(props.event.type)}
            </div>
        </div>
    );
};

export default Event;