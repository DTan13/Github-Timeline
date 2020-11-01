import React from 'react';
import { NavLink } from 'react-router-dom';
import Feedback from '../../components/feedback/Feedback';
let user = '';
const Data = props => {

    return (
        <div className="data-wrapper">
            <div className="input-wrapper">
                <input type="text" required placeholder='Github Username ex:DTan13' value={props.user || (user = window.location.pathname.split('/').reverse()[0])} onChange={event => { user = event.target.value; props.setUser(event.target.value); }} />
                <br />
                <div>
                    <button>
                        <NavLink exact onClick={(event) => {
                            props.setUser(user);
                            if (!user) {
                                alert('Enter A Username!');
                                event.preventDefault();
                            }
                        }} to={`/home`}>See TimeLine</NavLink>
                    </button>
                    <button>
                        <NavLink exact onClick={(event) => {
                            props.setUser(user);
                            if (!user) {
                                alert('Enter A Username!');
                                event.preventDefault();
                            }
                        }} to={`/projects`}>See Projects</NavLink>
                    </button>
                </div>
            </div>
            <Feedback />
        </div>
    );
};

export default Data;