import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import "./CardItem.css";

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
            <p>
              pays : <span style={{ color: "#eb6645" }}>{props.city.pays}</span>
            </p>
            <p>
              Nombre de places disponibles :{" "}
              <span style={{ color: "#eb6645" }}>{props.city.places}</span>
            </p>
            <p>
              Spécialité(s):{" "}
              <span style={{ color: "#eb6645" }}>
                {props.city.specialities}
              </span>{" "}
            </p>
            <p>Cout de la candidature avant admissibilité :</p>
            <p>
              Via Studenjoy :{" "}
              <span style={{ color: "#eb6645" }}>{props.city.studenjoy}</span>
            </p>
            <p>
              Via la procédure classique :{" "}
              <span style={{ color: "#eb6645" }}>{props.city.normal}</span>
            </p>
            <br />
            <p>
              Coût de la formation:{" "}
              <span style={{ color: "#eb6645" }}>{props.city.fees}</span>
            </p>
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
