import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Parcours professionnel</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'var(--color6)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: 'var(--color2)', color: 'var(--color6)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Votre entreprise ?</h3>
            <h4 className="vertical-timeline-element-subtitle">Présentiel en Finistère, hybride ou distanciel dans d'autres départements</h4>
            <p>
            Développeuse Front-end, Webmaster, SEO, Agile.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2024"
            iconStyle={{ background: 'var(--color2)', color: 'var(--color6)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Formation Développement Web</h3>
            <h4 className="vertical-timeline-element-subtitle">Openclassroom</h4>
            <p>
            Conception de sites web dynamiques, responsives, création d'API et gestion de bases de données, optimisation des performances, référencement gestion de projet
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2017"
            iconStyle={{ background: 'var(--color2)', color: 'var(--color6)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title"> M1: Théâtre et Culture du monde</h3>
            <h4 className="vertical-timeline-element-subtitle">Université de Franche-Comté</h4>
            <p>
              Recherche en sociologie, arts, Histoire et antropologie. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009 - 2022"
            iconStyle={{ background: 'var(--color2)', color: 'var(--color6)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Employée dans la restauration</h3>
            <h4 className="vertical-timeline-element-subtitle">Bretagne, Bourgogne-Franche-Comté</h4>
            <p>
            Responsable de salle, cheffe d'équipe et serveuse.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;