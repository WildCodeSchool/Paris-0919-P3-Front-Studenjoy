import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import "./CardItem.css";

const CardItem = props => {
  return (
    <div>
      <Link to={`/schoolcards/${props.city.nbSchool}`}>
        <div className="Dashboard__item">
          <h3 class="Dashboard__item_title">Etudier à {props.city.name}</h3>
          {props.city.img && (
            <img
              className="Dashboard__item_img"
              src={props.city.img}
              alt={props.city.name}
            />
          )}
          <div className="Dashboard__item_footer">
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
            <p className="Dashboard__item_number">
              <FontAwesomeIcon
                className="Dashboard__item_icon"
                icon={faSchool}
              />{" "}
              {props.city.nbSchool}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
