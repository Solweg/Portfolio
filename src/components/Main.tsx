import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import "../assets/images/moi.webp";
import moiImage from "../assets/images/moi.webp";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="about-background">
          <div className="image-wrapper">
            <img src={moiImage} alt="Hélène Gouguenheim" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a href="https://github.com/Solweg" target="_blank" rel="noreferrer"><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/lngouguenheim" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            </div>
            <h1>Hélène Gouguenheim</h1>
            <p>Développeuse Web Full Stack Junior</p>

            <div className="mobile_social_icons">
              <a href="https://github.com/Solweg" target="_blank" rel="noreferrer"><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/lngouguenheim" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
