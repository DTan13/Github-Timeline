import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Axios from 'axios';
import Event from './Event';

import { siteData } from '../../data/siteData';
const Home = props => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        Axios.get(`https://api.github.com/users/${siteData.githubUsername}/events?per_page=10&page=${page}`).then(res => {
            setEvents([...events, ...res.data]);
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
                </div>
            </div>
        </Layout>
    );
};

export default Home;