import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const CityItem = (props) =>{
  return (
    <div className="City__card">
      <h3 class="City__card_title">Etudier à {props.city.name}</h3>
      {props.city.img && (
        <img className="City__card_img" src={props.city.img} alt={props.city.name}/>
      )}
      <div className="City__card_footer">
        <p>Ecoles disponibles </p>
        <p className="City__card_number"><FontAwesomeIcon className="City__card_icon" icon={faSchool} /> {props.city.nbSchool}</p>
      </div>
    </div>
  )
};

export default CityItem
