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
    "Wordpress",

];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "PHP",
    "Algorithmie",
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
    "Prompt engineering",
];

function DownloadButton() {
    return (
        <div className="download-container">
            <a href={`${process.env.PUBLIC_URL}/Mon-CV.pdf`} download="Mon-CV.pdf">
                <button className="download-button">Télécharger mon CV</button>
            </a>

        </div>
    );
}

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <div className="Accroche-container">
                    <p className="Accroche">Chats, café et code : ma recette pour relever tous les défis. Étudiante DevOps Full Stack à l'EPSI Rennes, je recherche une alternance pour septembre 2025, au rythme de 2 semaines en entreprise / 1 semaine en cours.</p>
                </div>
                <h1 className="title">Compétences</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Création de sites web modernes et accessibles</h3>
                        <p>Je conçois des sites et des applications web qui s’adaptent à tous les écrans : smartphones, tablettes, ordinateurs… L’objectif est que chacun puisse naviguer facilement, quel que soit son appareil ou ses capacités. Je transforme des maquettes graphiques en pages web interactives, en veillant à ce que le site soit fluide, rapide et agréable à utiliser pour tout le monde.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGears} size="3x" />
                        <h3>Fonctionnalités sur mesure et sécurité des donnée</h3>
                        <p>Derrière chaque site, il y a un moteur invisible : je développe ces fonctionnalités invisibles mais essentielles. Cela peut aller de la gestion de comptes utilisateurs à l’envoi de formulaires ou l’affichage d’informations en temps réel. Je fais en sorte que tout fonctionne bien ensemble, en toute sécurité, grâce à des outils solides pour gérer les bases de données et les échanges d'informations.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faChartGantt} size="3x" />
                        <h3>Visibilité sur le web et bon fonctionnement</h3>
                        <p>Un site bien fait, c’est aussi un site que l’on trouve facilement sur les moteurs de recherche. J’optimise mes projets pour qu’ils soient bien référencés (SEO) et rapides à charger. J’organise aussi mon travail avec des outils modernes pour que chaque étape – du développement à la mise en ligne – soit fluide, rapide, et bien structurée.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>


                <DownloadButton />
            </div>
        </div>
    );
}

export default Expertise;
