import Axios from 'axios';
import React, { useState } from 'react';

const Feedback = props => {
    const [feedBack, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const submitFeedback = () => {
        if (feedBack === '' || name === '' || mail === '') {
            alert("Please provide Data");
            return;
        }

        Axios.post(`${process.env.REACT_APP_FEEDBACK_URL}/feedback`,
            {
                "name": name,
                "email": mail,
                "feedback": feedBack
            }).then(res => {
                alert('Thank you for feedback');
            }).catch(err => {

            });
    };

    return (
        <div className="feedback-wrapper">
            <div className="feedback-component">
                <div className="feedback">
                    Feedback
                    <br />
                    <hr />
                    <br />
                    <textarea maxLength='30' value={feedBack} placeholder=" Enter Feedback ..." onChange={(event) => {
                        setFeedback(event.target.value);
                    }}>

                    </textarea>
                </div>
                <br />
                <div className="feedback-bottom">
                    <div className="name">
                        Name <br /><br />
                        <input type="text" value={name} placeholder=" Your Name ..." onChange={(event) => {
                            setName(event.target.value);
                        }} />
                    </div>
                    <div className="contact">
                        Contact <br />
                        <br />
                        <input type="text" value={mail} placeholder=" Your Email" onChange={(event) => {
                            setMail(event.target.value);
                        }} />
                    </div>
                </div>
                <br />
                <br />
                <button onClick={submitFeedback}>Submit Feedback</button>
            </div>
        </div>
    );
};

export default Feedback;;