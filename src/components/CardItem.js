import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class CardItem extends React.Component {

  componentDidMount = () => window.scrollTo(0, 0);

  render(){
    return (
      <>
          <div className="School__card">
            <h3 class="School__card_title">Etudier à {this.props.city.schoolName}</h3>
            {this.props.city.img && (
              <img
                className="City__card_img"
                src={this.props.city.img}
                alt={this.props.city.name}
              />
            )}
            <div className="School__card_footer">
              <p className="SchoolCard__line">Ecole disponible </p>
              <p className="SchoolCard__line">
                pays : <span style={{ color: "#eb6645" }}>{this.props.city.pays}</span>
              </p>
              <p className="SchoolCard__line">
                Nombre de places disponibles :{" "}
                <span style={{ color: "#eb6645" }}>{this.props.city.places}</span>
              </p>
              <p className="SchoolCard__line">
                Spécialité(s):{" "}
                <span style={{ color: "#eb6645" }}>
                  {this.props.city.specialities}
                </span>{" "}
              </p>
              <p className="SchoolCard__line">Cout de la candidature avant admissibilité :</p>
              <p className="SchoolCard__line">
                Via Studenjoy :{" "}
                <span style={{ color: "#eb6645" }}>{this.props.city.studenjoy}</span>
              </p>
              <p className="SchoolCard__line">
                Via la procédure classique :{" "}
                <span style={{ color: "#eb6645" }}>{this.props.city.normal}</span>
              </p>
              <br />
              <p className="SchoolCard__line">
                Coût de la formation:{" "}
                <span style={{ color: "#eb6645" }}>{this.props.city.fees}</span>
              </p>
              <div className="SchoolCard__button">
                S'inscrire
              </div>
            </div>
          </div>
      </>
    );
  }
};

export default CardItem;
