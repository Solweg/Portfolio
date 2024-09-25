import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQFbwqdn1Bg0cQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726406110807?e=1732752000&v=beta&t=gxlXdURtXJLf3NDCPkm9mEmDn54Oxz7WhGu8V-RpqXA" alt="Photo d'Hélène Gouguenheim" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Solweg" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lngouguenheim" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hélène Gouguenheim</h1>
          <p>Développeuse Web Junior</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Solweg" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lngouguenheim" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;