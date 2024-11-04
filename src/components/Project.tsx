import React, { useState } from "react";
import Booki from '../assets/images/booki.png';
import kasa from '../assets/images/kasa.png';
import sophieBluel from '../assets/images/sophieBluel.png';
import grimoire from '../assets/images/monvieuxgrimoire.png';
import NinaCarducci from "../assets/images/ninacarducci.png";

import '../assets/styles/Project.scss';

// Définit un type pour l'état collapsed avec des clés spécifiques aux projets
type CollapsedState = {
  [key: string]: boolean;
};

function Project() {
    // Initialisation de collapsed avec toutes les cartes fermées par défaut
    const [collapsed, setCollapsed] = useState<CollapsedState>({
        kasa: true,
        booki: true,
        sophieBluel: true,
        grimoire: true,
        nina: true,
    });

    const toggleCollapse = (id: string) => {
        setCollapsed((prevState: CollapsedState) => ({
            ...prevState,
            [id]: !prevState[id] // Inverse l'état de la carte spécifique
        }));
    };

    return (
    <div className="projects-container" id="projects">
        <h1>Projets</h1>
        <div className="projects-grid">
            {/* Projet Kasa */}
            <div className={`project ${collapsed["kasa"] ? "collapsed" : ""}`}>
                <a className="projet-img" href="https://github.com/Solweg/Kasa" target="_blank" rel="noreferrer">
                    <img src={kasa} className="zoom" alt="Projet Kasa" width="100%" />
                </a>
                <div className="projet-description">
                   
                        <h2>Kasa</h2>
                    
                    <p className="project-subtitle">Application de location immobilière</p>
                    <div className="project-buttons">
                        <a className="project-button" href="https://github.com/Solweg/Kasa">Code Source</a> 
                        <a className="project-button" href="https://kasa-two-lovat.vercel.app/">Démo</a>
                    </div>
                    {!collapsed["kasa"] && ( // Si la carte n'est pas collapse
                        <div className="project-content">
                            <h3>Problématiques / solutions</h3>
                            <p>
                                La gestion des routes et des erreurs, notamment pour les URL non valides, a nécessité l'implémentation d'une page dédiée. L'adaptation du design aux écrans de différentes tailles a également été un défi, résolu grâce à l'utilisation des <strong>flexbox</strong>.
                            </p>
                            <h3>Compétences développées</h3>
                            <p>Maîtrise de <strong>React Router</strong>, utilisation des hooks <code>useState</code> et <code>useEffect</code>, et développement d'un <strong>responsive design</strong> optimal.</p>
                        </div>
                    )}
                    <div className="collapse-button-container">
                        <span className="collapse-button" onClick={() => toggleCollapse("kasa")}>
                            {collapsed["kasa"] ? "Voir plus" : "Voir moins"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Projet Booki */}
            <div className={`project ${collapsed["booki"] ? "collapsed" : ""}`}>
                <a className="projet-img" href="https://github.com/Solweg/Booki" target="_blank" rel="noreferrer">
                    <img src={Booki} className="zoom" alt="Projet Booki" width="100%" />
                </a>
                <div className="projet-description">
        
                        <h2>Booki</h2>
                    
                    <p className="project-subtitle">Intégration de la page d'accueil d'un site de voyage.</p>
                    <div className="project-buttons">
                        <a className="project-button" href="https://github.com/Solweg/Booki">Code Source</a>
                        <a className="project-button" href="https://solweg.github.io/Booki/">Démo</a>
                    </div>
                    {!collapsed["booki"] && (
                        <div className="project-content">
                            <h3>Problématiques / solutions</h3>
                            <p>L'adaptation du design à différents appareils a posé des difficultés, notamment pour ajuster les marges et tailles des éléments. J'ai utilisé les <strong>DevTools</strong> pour tester les résolutions et optimiser les <strong>flexbox</strong>.</p>
                            <h3>Compétences développées</h3>
                            <p>J'ai acquis une bonne maîtrise de <strong>Figma</strong> pour découper les maquettes, de Git/GitHub pour le contrôle de version, et des techniques de <strong>responsive design</strong>.</p>
                        </div>
                    )}
                    <div className="collapse-button-container">
                        <span className="collapse-button" onClick={() => toggleCollapse("booki")}>
                            {collapsed["booki"] ? "Voir plus" : "Voir moins"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Projet Sophie Bluel */}
            <div className={`project ${collapsed["sophieBluel"] ? "collapsed" : ""}`}>
                <a className="projet-img" href="https://github.com/Solweg/Projet-3" target="_blank" rel="noreferrer">
                    <img src={sophieBluel} className="zoom" alt="Projet Sophie Bluel" width="100%" />
                </a>
                <div className="projet-description">
                   
                        <h2>Sophie Bluel</h2>
                   
                    <p className="project-subtitle">Système de gestion de projets avec filtrage dynamique et authentification</p>
                    <div className="project-buttons">
                        <a className="project-button" href="https://github.com/Solweg/Projet-3">Code Source</a>
                    </div>
                    {!collapsed["sophieBluel"] && (
                        <div className="project-content">
                            <h3>Problématiques / solutions</h3>
                            <p>L'<strong>API</strong> ne fournissant pas de filtre "Tous", j'ai dû créer manuellement ce bouton et gérer la sélection dynamique pour afficher tous les projets. Concernant la gestion de la connexion, j'ai implémenté JWT pour sécuriser l'authentification et les routes avec un middleware.</p>
                            <h3>Compétences développées</h3>
                            <p>J'ai renforcé mes compétences en manipulation du DOM, en authentification avec JWT, et en gestion des API pour afficher et manipuler <strong>dynamiquement</strong> les données.</p>
                        </div>
                    )}
                    <div className="collapse-button-container">
                        <span className="collapse-button" onClick={() => toggleCollapse("sophieBluel")}>
                            {collapsed["sophieBluel"] ? "Voir plus" : "Voir moins"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Projet Grimoire */}
            <div className={`project ${collapsed["grimoire"] ? "collapsed" : ""}`}>
                <a className="projet-img" href="https://github.com/Solweg/Grimoire" target="_blank" rel="noreferrer">
                    <img src={grimoire} className="zoom" alt="Projet mon vieux grimoire" width="100%" />
                </a>
                <div className="projet-description">
                   
                        <h2>Mon vieux grimoire</h2>
                   
                    <p className="project-subtitle">Application de gestion sécurisée <br/> avec téléchargement d'images</p>
                    <div className="project-buttons">
                        <a className="project-button" href="https://github.com/Solweg/Grimoire">Code Source</a>
                    </div>
                    {!collapsed["grimoire"] && (
                        <div className="project-content">
                            <h3>Problématiques / solutions</h3>
                            <p>La gestion de l'<strong>authentification sécurisée</strong> avec des <strong>tokens JWT</strong> et la sécurisation des routes a nécessité une implémentation rigoureuse via un middleware.</p>
                            <h3>Compétences développées</h3>
                            <p>Gestion sécurisée des <strong>tokens JWT</strong> et <strong> bcrypt</strong>, optimisation des images via <strong>Sharp</strong>, et structuration des <strong>API RESTful</strong> pour des opérations CRUD.</p>
                        </div>
                    )}
                    <div className="collapse-button-container">
                        <span className="collapse-button" onClick={() => toggleCollapse("grimoire")}>
                            {collapsed["grimoire"] ? "Voir plus" : "Voir moins"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Projet Nina-Carducci */}
            <div className={`project ${collapsed["Nina-Carducci"] ? "collapsed" : ""}`}>
                <a className="projet-img" href="https://solweg.github.io/nina-carducci.photographe/" target="_blank" rel="noreferrer">
                    <img src={NinaCarducci} className="zoom" alt="Projet Nina-Carducci" width="100%" />
                </a>
                <div className="projet-description">
                   
                        <h2>Nina Carducci</h2>
                    
                    <p className="project-subtitle">Optimisation d’un site de photographie</p>
                    <div className="project-buttons">
                        <a className="project-button" href="https://github.com/Solweg/nina-carducci.photographe">Code Source</a> 
                        <a className="project-button" href="https://solweg.github.io/nina-carducci.photographe/">Démo</a>
                    </div>
                    {!collapsed["nina"] && ( // Si la carte n'est pas collapse
                        <div className="project-content">
                            <h3>Problématiques / solutions</h3>
                            <p>
                            L'optimisation des performances et de l'accessibilité du site web était essentielle pour améliorer le référencement (SEO) et l'expérience utilisateur. J'ai notamment dû résoudre des problèmes de chargement d'images lourdes et de code non optimisé. L’optimisation des images, la minification des fichiers CSS/JS, ainsi que la mise en place du lazy loading ont permis d’améliorer considérablement les performances du site.
                            </p>
                            <h3>Compétences développées</h3>
                            <p>Maitrise des outils d’analyse de performance (Lighthouse, Wave), optimisation SEO (balises meta, Open Graph), gestion des images (TinyPNG, conversion WebP), mise en place du responsive design et amélioration de l’accessibilité.</p>
                        </div>
                    )}
                    <div className="collapse-button-container">
                        <span className="collapse-button" onClick={() => toggleCollapse("nina")}>
                            {collapsed["nina"] ? "Voir plus" : "Voir moins"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;
