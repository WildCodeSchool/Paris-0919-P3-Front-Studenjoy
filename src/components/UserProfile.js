import React from 'react';
import Logo from '../images/LogoStudenjoy.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
  return (
    <div className="UserProfile__container">
      <div className="UserProfile__header">
        <div className="UserProfile__picture"><img src={Logo} alt="profile"/></div>
        <div className="UserProfile__header--main_infos">
          <h1 className="UserProfile__title">John Doe</h1>
          {/* <span>Profil complet <FontAwesomeIcon icon={faCheckCircle} /> </span> */}
          <span>Profil incomplet <FontAwesomeIcon icon={faTimesCircle} /></span>
        </div>
      </div>
      <div className="UserProfile__body">
        <h2 className="UserProfile__subtitle">Informations principales</h2>
        <div className="UserProfile__info">
          <span>Prénom</span>
          <input type="text" disabled value="John"/>
        </div>
        <div className="UserProfile__info">
          <span>Nom</span>
          <input type="text" disabled value="Doe"/>
        </div>
        <div className="UserProfile__info">
          <span>E-mail</span>
          <input type="text" disabled value="john.doe@gmail.com"/>
        </div>
        <div className="UserProfile__info">
          <span>Date de naissance</span>
          <input type="text" disabled value="30/10/1995"/>
        </div>

        <h2 className="UserProfile__subtitle">Documents administratifs</h2>
        {/*  LOOP THROUGH USER DOC_ADMINS + SORT BY TYPE*/}
        <div className="UserProfile__doc">
          <span>CV</span>
          CVJohnDoe.pdf
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
