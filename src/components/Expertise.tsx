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
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Compétences</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Développement Front-end</h3>
                    <p>En tant que développeur web, j'ai une forte expertise en développement front-end avec un accent particulier sur l’accessibilité. Je transforme des maquettes en interfaces réactives en utilisant des technologies comme HTML5, CSS3, JavaScript, et React. J'assure la compatibilité des sites sur tous les appareils tout en respectant les bonnes pratiques d'accessibilité (WCAG).</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGears} size="3x"/>
                    <h3>Back-end et API</h3>
                    <p>Je maîtrise le développement back-end avec des technologies telles que Node.js, Express, et des bases de données comme MongoDB et MySQL. J'intègre des API et gère l’authentification ainsi que la sécurité des données pour offrir des solutions robustes et évolutives.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartGantt} size="3x"/>
                    <h3>Organisation, SEO et Référencement</h3>
                    <p>Je veille à la performance des sites avec une attention particulière au SEO et à l'optimisation pour le référencement naturel. J'utilise des outils comme Google Analytics, Chrome DevTools, et mets en place des pipelines CI/CD pour assurer une gestion de projet efficace et une mise en production fluide.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;