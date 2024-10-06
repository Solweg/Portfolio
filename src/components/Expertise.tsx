import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faGears, faChartGantt } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "PostgreSQL",
    "MySQL",
    "Postman",
    "MongoDB",
    "Node.js",
    "Express"
];

const labelsThird = [
    "Notion",
    "Kanban",
    "Veille Technologique",
    "Chrome DevTools",
    "Google Analytics",
];

function DownloadButton() {
    return (
        <div className="download-container">
            <a href="../src/assets/Mon-CV.pdf" download="Mon-CV.pdf">
                <button className="download-button">Télécharger mon CV</button>
            </a>
        </div>
    );
}

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Compétences</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Développement Front-end</h3>
                        <p>En tant que Développeuse web, j'ai une expertise en développement front-end avec un accent particulier sur l’<strong>accessibilité</strong>. Je transforme des maquettes en interfaces réactives en utilisant des technologies comme <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, et <strong>React</strong>. J'assure la compatibilité des sites sur tous les appareils tout en respectant les bonnes pratiques d'accessibilité (WCAG).</p>
                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGears} size="3x"/>
                        <h3>Back-end et API</h3>
                        <p>Je maîtrise le développement back-end avec des technologies telles que <strong>Node.js</strong>, <strong>Express</strong>, et des bases de données comme <strong>MongoDB</strong> et <strong>MySQL</strong>. J'intègre des <strong>API</strong> et gère l’authentification ainsi que la sécurité des données pour offrir des solutions robustes et évolutives.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faChartGantt} size="3x"/>
                        <h3>Organisation, SEO et Référencement</h3>
                        <p>Je veille à la performance des sites avec une attention particulière au SEO et à l'optimisation pour le référencement naturel. J'utilise des outils comme <strong>Google Analytics</strong>,  <strong>Chrome DevTools</strong>, et mets en place des pipelines CI/CD pour assurer une gestion de projet efficace et une mise en production fluide.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ajouter le bouton de téléchargement après les compétences */}
                <DownloadButton />
            </div>
        </div>
    );
}

export default Expertise;
