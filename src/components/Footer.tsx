import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Solweg" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/lngouguenheim" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>Fork du portfolio de <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> modifié en Bretagne</p>
    </footer>
  );
}

export default Footer;