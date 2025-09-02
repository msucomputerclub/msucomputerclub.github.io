import React from "react";
import './index.scss'
import Kevin from '../../Assets/Images/kevin.jpg'
import Josh from "../../Assets/Images/joshua.jpeg"
import Hamzah from "../../Assets/Images/hamzah.jpeg"

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
        <h1 className="meet">Meet the team!</h1>
        <div className="face-cards">
          <div className="face-card">
            <a
              className="face-container"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kevincalle/"
              onClick={(e) => {
                if (isMobile()) {
                  e.preventDefault();
                  openCustomOrWebLink(
                    "linkedin://in/kevin-calle-76a650197",
                    "https://www.linkedin.com/in/kevincalle"
                  );
                }
              }}
              target="_blank"
            >
              <img className="headshot" src={Kevin} alt="" />
            </a>
            <span className="name">Kevin Calle</span>
            <span className="job-title">President / Web Developer</span>
            <div className="socials">
              <img src="" alt="" href="" />
            </div>
          </div>
          <div className="face-card">
            <a
              className="face-container"
              rel="noreferrer"
              href="https://www.linkedin.com/in/joshua-quispe1/"
              target={"_blank"}
            >
              <img className="headshot" src={Josh} alt="" />
            </a>
            <span className="name">Joshua Quispe</span>
            <span className="job-title">Vice-President</span>
            <div className="socials">
              <img src="" alt="" href="" />
            </div>
          </div>
          <div className="face-card">
            <a
              className="face-container"
              rel="noreferrer"
              href="https://www.linkedin.com/in/hamzah-ali-muhammad/"
              target={"_blank"}
            >
              <img className="headshot" src={Hamzah} alt="" />
            </a>
            <span className="name">Hamzah Ali Muhammad</span>
            <span className="job-title">Treasurer</span>
            <div className="socials">
              <img src="" alt="" href="" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Eboard;