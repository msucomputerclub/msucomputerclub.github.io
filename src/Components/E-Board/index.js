import React from "react";
import './index.scss'
import Kevin from '../../Assets/Images/kevin.jpg'
import Alex from "../../Assets/Images/alex.jpg"
import Tyler from "../../Assets/Images/tyler.jpg"

const Eboard = () => {
    

    function openCustomOrWebLink(customURL, webFallbackURL) {
        window.open(webFallbackURL, "_blank")
        window.open(customURL);
        
      }

    const isMobile = () => {
        return /Mobi|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|webOS/i.test(navigator.userAgent);
    };


    return (
        <div className="team">
            
            <h1 className="meet">
                Meet the team!
            </h1>
            <div className="face-cards">
                <div className="face-card">
                    <a className="face-container" rel="noreferrer" href="https://www.linkedin.com/in/tyler-van-buren/" target={"_blank"}>
                        <img className="headshot"src={Tyler} alt="" />
                    </a>
                    <span className="name">Tyler Van Buren</span>
                    <span className="job-title">President</span>
                    <div className="socials">
                        <img src="" alt="" href=""/>
                    </div>
                </div>
                <div className="face-card">
                    <a 
                        className="face-container" 
                        rel="noreferrer" 
                        href="https://www.linkedin.com/in/alexander-crespo-3abb12152/" 
                        target={"_blank"}>
                        <img className="headshot"src={Alex} alt="" />
                    </a>
                    <span className="name">Alexander Crespo</span>
                    <span className="job-title">Vice President</span>
                    <div className="socials">
                        <img src="" alt="" href=""/>
                    </div>
                </div>
                <div className="face-card">
                    <a 
                        className="face-container" 
                        rel="noreferrer" 
                        href="https://www.linkedin.com/in/kevincalle/" 
                        onClick={(e) => {
                            if(isMobile()){
                                e.preventDefault();
                                openCustomOrWebLink(
                                    "linkedin://in/kevin-calle-76a650197", 
                                    "https://www.linkedin.com/in/kevincalle")
                                }
                            }
                        } 
                        target="_blank">
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