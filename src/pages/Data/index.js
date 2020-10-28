import React from 'react';
import { NavLink } from 'react-router-dom';
let user = '';
const Data = props => {
    return (
        <div className="data-wrapper">
            <div className="input-wrapper">
                <input type="text" required placeholder='Github Username ex:DTan13' value={props.user || (user = window.location.pathname.split('/').reverse()[0])} onChange={event => { user = event.target.value; props.setUser(event.target.value); }} />
                <br />
                <button>
                    <NavLink exact onClick={(event) => {
                    console.log(user);
                    props.setUser(user);
                    if (!user) {
                        alert('Enter A Username!');
                        event.preventDefault();
                    }
                    }} to={`/home`}>Submit</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Data;