import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./CardItem.css";

const CardItem = props => {
  return (
    <div>
      <Link to={`/schoolcards/${props.city.nbSchool}`}>
        <div className="School__card">
          <h3 class="School__card_title">Etudier à {props.city.name}</h3>
          {props.city.img && (
            <img
              className="City__card_img"
              src={props.city.img}
              alt={props.city.name}
            />
          )}
          <div className="School__card_footer">
            <p>Ecole disponible </p>
            <p>pays : {props.city.pays}</p>
            <p>Nombre de places disponibles {props.city.places}</p>
            <p>Spécialité(s): {props.city.specialities} </p>
            <p>Cout de la candidature avant admissibilité :</p>
            <p>Via Studenjoy : {props.city.studenjoy}</p>
            <p>Via la procédure classique : {props.city.normal}</p>
            <br />
            <p>Coût de la formation: {props.city.fees}</p>
            <p className="School__card_number">
              <FontAwesomeIcon className="City__card_icon" icon={faSchool} />{" "}
              {props.city.nbSchool}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
