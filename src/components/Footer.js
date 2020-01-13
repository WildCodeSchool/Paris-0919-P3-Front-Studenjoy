import React from 'react';
import logo from '../images/LogoStudenjoyText.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="Footer__container">
            <div className="Footer__col">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <h2> Vous accompagne !</h2>
            </div>

            <div className="Footer__col">
                <h2>Légal et Administratif</h2>
                <p className="Footer__line">Événement et Intégration</p>
                <p className="Footer__line">Je m'inscris</p>
            </div>


            <div className="Footer__col">
                <h2>Contact:</h2>
                <p className="Footer__line">Adresse: 7, rue Mansour El abidi boulevard Bir anzarane maarif Casablanca</p>
                <p className="Footer__line">Téléphone: 0661454441</p>
                <p className="Footer__line">Email: admission@studenjoy.com</p>
            </div>

            <div className="Footer__col">
                <h2>Follow Us</h2>
                <div className="Footer__icons">
                    <a href="https://www.facebook.com/studenjoypage/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.linkedin.com/company/studenjoy/"><FontAwesomeIcon icon={faLinkedin}  /></a>
                    <a href="https://twitter.com/Studenjoy_news"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </div>
    )
}


export default Footer