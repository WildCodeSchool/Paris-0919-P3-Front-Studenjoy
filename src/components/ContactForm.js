import React from 'react';

const ContactForm = () => {
    return(
    <form id="contact" method="post">
        <div className="title">
            <h3 className="ContactForm_title">Contactez-nous!</h3>
            <h4 className="ContactForm_title">Pour nous contacter :</h4>
            </div>
            <div className="InputForm" >
                <input placeholder="Votre nom" type="text" tabindex="1" required autofocus/>
                <input placeholder="Votre adresse email" type="email" tabindex="2" required/>
                <input placeholder="Votre numéro de téléphone (en option)" type="tel" tabindex="3" required/>

                <textarea placeholder="Tapez votre message ici..." tabindex="5" required />
            
                <button className="button">Envoyer</button>
        </div>
        </form>
    )
}


export default ContactForm 