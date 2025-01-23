import React from "react";
import './index.scss'
import Kevin from '../../Assets/Images/kevin.jpg'
import { AnimatePresence, motion } from "framer-motion";

const Eboard = () => {
    return (
        <div className="team">
            <h1 className="meet">
                Meet the team!
            </h1>
            <div className="face-cards">
                <div className="face-card">
                    <div className="face-container">
                        <img className="headshot"src="" alt="" />
                    </div>
                    <span className="name">Tyler Van Buren</span>
                    <span className="job-title">President</span>
                    <div className="socials">
                        <img src="" alt="" href=""/>
                    </div>
                </div>
                <div className="face-card">
                    <div className="face-container">
                        <img className="headshot"src="" alt="" />
                    </div>
                    <span className="name">Alexander Crespo</span>
                    <span className="job-title">Vice President</span>
                    <div className="socials">
                        <img src="" alt="" href=""/>
                    </div>
                </div>
                <div className="face-card">
                    <a className="face-container" href="https://www.linkedin.com/in/kevin-calle-76a650197/" target="_blank">
                        <img className="headshot"src={Kevin} alt="" />
                    </a>
                    <span className="name">Kevin Calle</span>
                    <span className="job-title">Web Developer/Treasurer</span>
                    <div className="socials">
                        <img src="" alt="" href=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eboard;