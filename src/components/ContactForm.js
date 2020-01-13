import React from 'react';

const ContactForm = () => {
  return(
  <form id="ContactForm__contact" method="post">
    <div className="ContactForm__header">
      <h2 className="ContactForm__title">Contactez-nous!</h2>
      <h4 className="ContactForm__title">Pour nous contacter :</h4>
    </div>
    <div className="ContactForm__input_form">
      <input placeholder="Votre nom" type="text" required />
      <input placeholder="Votre adresse email" type="email" required/>
      <input placeholder="Votre numéro de téléphone (en option)" type="tel" required/>
      <input placeholder="Tapez votre message ici..." required />  
      <div className="ContactForm__button">Envoyer</div>
    </div>
  </form>
  )
}


export default ContactForm 