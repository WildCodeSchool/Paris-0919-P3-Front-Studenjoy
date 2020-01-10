import React from 'react';

const ContactForm = () => {
  return(
  <form id="ContactForm__contact" method="post">
    <div className="ContactForm__header">
      <h2 className="ContactForm__title">Contactez-nous!</h2>
      <h4 className="ContactForm__title">Pour nous contacter :</h4>
    </div>
    <div className="ContactForm__input_form">
      <input placeholder="Votre nom" type="text" tabindex="1" required autofocus/>
      <input placeholder="Votre adresse email" type="email" tabindex="2" required/>
      <input placeholder="Votre numéro de téléphone (en option)" type="tel" tabindex="3" required/>
      <input placeholder="Tapez votre message ici..." tabindex="5" required />  
      <div className="ContactForm__button">Envoyer</div>
    </div>
  </form>
  )
}


export default ContactForm 