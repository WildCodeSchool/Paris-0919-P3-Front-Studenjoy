import React from "react";


class CardItem extends React.Component {

  componentDidMount = () => window.scrollTo(0, 0);

  render(){
    return (
      <>
          <div className="School__card">
            <h3 class="School__card_title">Etudier à {this.props.school.school_name}</h3>
            {this.props.school.img && (
              <img
                className="school__card_img"
                src={this.props.school.img}
                alt={this.props.school.school_name}
              />
            )}
            <div className="School__card_footer">
              <p className="SchoolCard__line">Ecole disponible </p>
              {/* <p className="SchoolCard__line">
                Nombre de places disponibles :{" "}
                <span style={{ color: "#eb6645" }}>{this.props.school.places}</span>
              </p> */}
              {/* <p className="SchoolCard__line">
                Spécialité(s):{" "}
                {this.props.school.specialities.map(speciality =>
                  <span style={{ color: "#eb6645" }}>
                    {speciality.name}
                  </span>
                )}
              </p> */}
              {/* <p className="SchoolCard__line">Cout de la candidature avant admissibilité :</p>
              <p className="SchoolCard__line">
                Via Studenjoy :{" "}
                <span style={{ color: "#eb6645" }}>{this.props.school.studenjoy}</span>
              </p>
              <p className="SchoolCard__line">
                Via la procédure classique :{" "}
                <span style={{ color: "#eb6645" }}>{this.props.school.normal}</span>
              </p> */}
              <br />
              {/* <p className="SchoolCard__line">
                Coût de la formation:{" "}
                <span style={{ color: "#eb6645" }}>{this.props.school.fees}</span>
              </p> */}
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
