import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Contact.scss';



function Contact() {
    return (
        <div className="container container-contact" id="contact">
            <div className="skills-container">
                <h1 className="title">Contact</h1>
                <p className="text-contact">Un projet à réaliser ? Collaborons et faisons-le aboutir ensemble !</p>
                <div className="skills-grid">
                    <div className="contact-col">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" />
                        <h2 className="contact-subtitle">Mail</h2>
                        <a href="mailto:&#104;&#101;%6ce%6e%65g&#111;%75%67&#117;&#101;&#110;h%65%69%6d&#64;&#121;%61%68&#111;%6f%2e&#102;%72">helenegouguenheim&#64;gmail.com</a>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;