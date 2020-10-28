import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Axios from 'axios';
import Event from './Event';
import ReactVisibilitySensor from "react-visibility-sensor";

import Layout from '../../components/layout';
import { siteData } from '../../data/siteData';
import { FaSpinner } from 'react-icons/fa';
import EventDetails from './EventDetails';

const Home = props => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [dataOver, setDataOver] = useState(false);
    const [selectedId, setSelectedID] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        Axios.get(`https://api.github.com/users/${siteData.githubUsername}/events?per_page=10&page=${page}`).then(res => {
            setEvents([...events, ...res.data]);
            if (res.data.length === 0) {
                setDataOver(true);
            }
        }).catch(err => {
            console.log(err);
        });
    }, [page]);

    return (
        <Layout>
            <div className="home-page-wrapper">
                <div className="event-list-wrapper">
                    {events.map(event => {
                        return (
                            <div key={event.id}>
                                <Event event={event} />
                            </div>
                        );
                    })}
                    <ReactVisibilitySensor onChange={() => { setPage(page + 1); }}>
                        <div className='event-load'>{dataOver ? 'Events are over' : <FaSpinner className='fa-spin' />}</div>
                    </ReactVisibilitySensor>
                    <EventDetails hideDetails={() => { setShowDetails(false); }} id={selectedId} event={events.filter(event => event.id === selectedId)} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;