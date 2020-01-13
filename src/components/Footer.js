import React from 'react';
import logo from  '../images/LogoStudenjoyText.png';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="first-colmun">
            <Link to ="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>
            <h2> Vous accompagne !</h2> 
            </div>
            
            <div className="second-column">
                <h2>Légal et Administratif</h2>
                <h3>Événement et Intégration</h3>
                <h3>Je m'inscris</h3>
            </div>
            
            
            <div className="third-column">
                <h2>Contact:</h2>
                <h3>Adresse: 7, rue Mansour El abidi boulevard Bir anzarane maarif Casablanca</h3>
                <h3>Téléphone: 0661454441</h3>
                <h3>Email: admission@studenjoy.com</h3>    
            </div>
            
            <div className="four-column">
                <h2>Follow Us</h2>
            <Link className="icon">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faTwitter} />
            </Link>
            </div>
            
        </footer>
        
    )
}


export default Footer