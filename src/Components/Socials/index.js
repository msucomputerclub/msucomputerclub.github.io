import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./index.scss"
const Socials = () => {
    return (
        <div className="socials">
            <h1>
                Links to our Social Media
            </h1>
            <div className="links">
                <a href="https://www.linkedin.com/company/montclair-state-university-computing-club/" target={"_blank"} rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                </a>
                <a href="" target={"_blank"} rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faDiscord}/>
                </a>
                <a href="https://www.instagram.com/msucomputingclub?igsh=MWx1MHJxaXMzN2JvdA==" target={"_blank"} rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faInstagram}/>
                </a>

            </div>

            <p>
                Feel free to send us an email at <a href="mailto:ComputingClub@sgamsu.org">ComputingClub@sgamsu.org</a>
                <br />
                &copy; 2025 MSU Computing Club
            </p>
        </div>
    );
};

export default Socials;