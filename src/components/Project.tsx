import React from "react";
import Booki from '../assets/images/booki.png';
import kasa from '../assets/images/kasa.png';
import sophieBluel from "../assets/images/sophieBluel.png";
import grimoire from "../assets/images/monvieuxgrimoire.png"

import '../assets/styles/Project.scss';

function Project() {
    return (
    <div className="projects-container" id="projects">
        <h1>Projets</h1>
        <div className="projects-grid">
            <div className="project">
                <a className="projet-img" href="https://github.com/Solweg/Kasa" target="_blank" rel="noreferrer">
                    <img src={kasa} className="zoom" alt="Kasa project thumbnail" width="100%" />
                </a>
                <div className="projet-description">
                    <a href="https://github.com/Solweg/Kasa" target="_blank" rel="noreferrer">
                        <h2>Kasa</h2>
                    </a>
                    <p>
                    Application de location immobilière
                    </p>
                    <div className="project-buttons">
                    <a className ="project-button" href="https://github.com/Solweg/Kasa">Code Source</a>
                    </div>
                        <h3>Problématiques / solutions</h3> 
                    <p>
                        La gestion des routes et des erreurs, notamment pour les URL non valides, a nécessité l'implémentation d'une page dédiée. L'adaptation du design aux écrans de différentes tailles a également été un défi, résolu grâce à l'utilisation des <strong>flexbox</strong>.
                    </p>
                    
                        <h3>Compétences développées</h3> <p>Maîtrise de <strong>React Router</strong>, utilisation des hooks `useState` et `useEffect`, et développement d'un <strong>responsive design</strong> optimal.
                    </p>
                    
                </div>
            </div>
            <div className="project">
                <a className="projet-img" href="https://github.com/Solweg/Booki" target="_blank" rel="noreferrer">
                    <img src={Booki} className="zoom" alt="Booki project thumbnail" width="100%" />
                </a>
                <div className="projet-description">
                <a href="https://github.com/Solweg/Booki" target="_blank" rel="noreferrer">
                    <h2>Booki </h2>
                </a>
                <p>
                Intégration de la page d'accueil d'un site de voyage.
                </p>
                <div className="project-buttons">
                <a className ="project-button" href="https://github.com/Solweg/Booki">Code Source</a>
                <a className="project-button" href="https://solweg.github.io/Booki/">Démo</a>
                </div>
                    <h3>Problématiques / solutions</h3> 
                    <p>
                        L'adaptation du design à différents appareils a posé des difficultés, notamment pour ajuster les marges et tailles des éléments. J'ai utilisé les <strong>DevTools</strong> pour tester les résolutions et optimiser les <strong>flexbox</strong>. De plus, le placeholder sous Firefox ne changeait pas correctement de couleur, résolu en ajustant l'opacité à 1.
                </p>
                
                    <h3>Compétences développées</h3> <p>J'ai acquis une bonne maîtrise de <strong>Figma</strong> pour découper les maquettes, de Git/GitHub pour le contrôle de version, et des techniques de <strong>responsive design</strong> avec l'optimisation des <strong>flexbox</strong>.
                </p>
                
                </div>
            </div>
            <div className="project">
                <a className="projet-img" href="https://github.com/Solweg/Projet-3" target="_blank" rel="noreferrer">
                    <img src={sophieBluel} className="zoom" alt="Sophie Bluel project thumbnail" width="100%" />
                </a>
                <div className="projet-description">
                    <a href="https://github.com/Solweg/Projet-3" target="_blank" rel="noreferrer">
                        <h2>Sophie Bluel</h2>
                    </a>
                    <p>
                    Système de gestion de projets avec filtrage dynamique et authentification
                    </p>
                    <div className="project-buttons">
                    <a className ="project-button" href="https://github.com/Solweg/Projet-3">Code Source</a>
                    </div>
                    <h3>Problématiques / solutions</h3> 
                    <p>L'<strong>API</strong> ne fournissant pas de filtre "Tous", j'ai dû créer manuellement ce bouton et gérer la sélection dynamique pour afficher tous les projets. Concernant la gestion de la connexion, j'ai implémenté JWT pour sécuriser l'authentification et les routes avec un middleware.
                    </p>
                    
                        <h3>Compétences développées</h3> <p>J'ai renforcé mes compétences en manipulation du DOM, en authentification avec JWT, et en gestion des API pour afficher et manipuler <strong>dynamiquement</strong> les données.
                    </p>
                    
                </div>
            </div>
            <div className="project">
                <a className="projet-img" href="https://github.com/Solweg/Grimoire" target="_blank" rel="noreferrer">
                    <img src={grimoire} className="zoom" alt="Mon vieux grimoire project thumbnail" width="100%" />
                </a>
                <div className="projet-description">
                <a href="https://github.com/Solweg/Grimoire" target="_blank" rel="noreferrer">
                    <h2>Mon vieux grimoire</h2>
                </a>
                <p>Application de gestion sécurisée avec téléchargement d'images</p>
                <div className="project-buttons">
                <a className ="project-button" href="https://github.com/Solweg/Grimoire">Code Source</a>
                </div>
                    <h3>Problématiques / solutions</h3>  <p>La gestion de l'<strong>authentification sécurisée</strong> avec des <strong>tokens JWT</strong> et la sécurisation des routes a nécessité une implémentation rigoureuse via un middleware. De plus, le téléchargement d'images a présenté des défis en termes de performances et de stockage, résolus par l'optimisation avec <strong>Multer</strong> et <strong>Sharp</strong>.
                </p>
                <p>
                    <h3>Compétences développées</h3> Gestion sécurisée des <strong>tokens JWT</strong> et <strong> bcrypt</strong> , optimisation des images via <strong> Sharp</strong> , et structuration des <strong> API RESTful</strong>  pour des opérations CRUD.
                </p>
              
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;
