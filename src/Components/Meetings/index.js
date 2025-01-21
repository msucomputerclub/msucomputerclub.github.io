import React from "react";
import "./index.scss";

const Meetings = () => {
    return (
        <div className="meetings">
            <h1>
                Meetings
            </h1>
            <div className="meetings-text">
            <p>
                We typically meet on Thursdays from 4:00pm to 5:00pm biweekly, in CCIS
                236. Please pay attention to our <a href="#"> club discord</a> for
                any changes in our schedule. We will also update this website to 
                reflect the schedule; however, that is subject to change.
            </p>
            </div>
        </div>
    );
};

export default Meetings;