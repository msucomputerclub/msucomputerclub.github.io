import React from "react";
import "./index.scss";

const Header = () => {
    return (
    <div className="content">
        <div className="nav">
            <h1>MSU Computing Club</h1>
            <div className="buttons">
                
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Meetings">Meetings</a>
                <a href="#Announcements">Announcements</a>
                <a href="#E-Board">E-Board</a>
                <a href="#Socials">Socials</a>
            </div>
        </div>
    </div>
    );
};

export default Header;