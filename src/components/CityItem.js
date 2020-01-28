import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

import Logo from '../images/LogoStudenjoy.png';

const CityItem = props => {
  return (
    <div>
      <div className="City__card">
        <h3 className="City__card_title">Etudier à {props.city.school_name}</h3>
        <img
          className="City__card_img"
          src={props.city.img ? props.city.img : Logo}
          alt={props.city.name}
        />
        <div className="City__card_footer">
          <p>Ecoles disponibles </p>
          <p className="City__card_number">
            <FontAwesomeIcon className="City__card_icon" icon={faSchool} />{" "}
            {props.numSchools}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityItem;
