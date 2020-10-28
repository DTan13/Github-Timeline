import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Event from './Event';
import ReactVisibilitySensor from "react-visibility-sensor";

import { siteData } from '../../data/siteData';
import { FaSpinner } from 'react-icons/fa';
import EventDetails from './EventDetails';

const Home = props => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [dataOver, setDataOver] = useState(false);
    const [selectedId, setSelectedID] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const separateDetails = window.innerWidth < 800;

    useEffect(() => {
        Axios.get(`https://api.github.com/users/${props.user}`).then(res => {
            setIsUser(true);
        }).catch(err => {
            setIsUser(false);
            console.log(err);
        });
    }, [props.user]);

    useEffect(() => {
        Axios.get(`https://api.github.com/users/${props.user || siteData.githubUsername}/events?per_page=20&page=${page}`).then(res => {
            console.log(page);
            setEvents([...events, ...res.data]);
            if (res.data.length === 0) {
                setDataOver(true);
            }
        }).catch(err => {
            console.log(err);
        });
    }, [page]);

    return (
        <div className="home-page-wrapper">
            {separateDetails && (!showDetails ? <div className="event-list-wrapper">
                <div className="event-list">
                    {events.map(event => {
                        return (
                            <div key={event.id}>
                                <Event onClick={() => { setShowDetails(true); setSelectedID(event.id); }} event={event} />
                            </div>
                        );
                    })}
                </div>
                <ReactVisibilitySensor onChange={() => { dataOver || setPage(page + 1); }}>
                    <div className='event-load'>{isUser ? (dataOver ? 'No More Activity!' : <FaSpinner className='fa-spin' />) : 'Wrong Username'}</div>
                </ReactVisibilitySensor>
            </div> :
                selectedId && showDetails && <div className="event-details-wrapper">
                    <EventDetails hideDetails={() => { setShowDetails(false); }} id={selectedId} event={events.filter(event => event.id === selectedId)} />
                </div>)}
            {!separateDetails && [<div className="event-list-wrapper">
                <div className="event-list">
                    {events.map(event => {
                        return (
                            <div key={event.id}>
                                <Event onClick={() => { setShowDetails(true); setSelectedID(event.id); }} event={event} />
                            </div>
                        );
                    })}
                </div>
                <ReactVisibilitySensor onChange={() => { dataOver || setPage(page + 1); }}>
                    <div className='event-load'>{isUser ? (dataOver ? 'No More Activity!' : <FaSpinner className='fa-spin' />) : 'Wrong Username'}</div>
                </ReactVisibilitySensor>
            </div>,
            selectedId && showDetails && <div className="event-details-wrapper">
                <EventDetails hideDetails={() => { setShowDetails(false); }} id={selectedId} event={events.filter(event => event.id === selectedId)} />
            </div>]}
        </div>
    );
};

export default Home;