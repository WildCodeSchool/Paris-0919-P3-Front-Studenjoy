import React, { Component } from "react";

import Navbar from './Navbar';
import CardItem from "./CardItem";

const fakeCities = [
  {
    name: "Paris",
    schoolName: "School 1",
    nbSchool: 15,
    pays: "France",
    places: 10,
    specialities: "Management de l'innovation, Management Technologique",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784_20770_1.800w.jpg?ver=1575040255"
  },
  {
    name: "Orleans",
    schoolName: "School 2",
    nbSchool: 2,
    pays: "France",
    places: 10,
    specialities: "Commerce international",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img: "https://www.umanis.com/wp-content/uploads/2016/12/orleans-agence.png"
  },
  {
    name: "Marseille",
    schoolName: "School 3",
    nbSchool: 5,
    pays: "France",
    places: 10,
    specialities: "Management de projet secteur aeronotique",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://madeinmarseille.net/actualites-marseille/2017/11/date-cle-histoire-marseille.jpg"
  },
  {
    name: "Bordeaux",
    schoolName: "School 4",
    nbSchool: 6,
    pays: "France",
    places: 10,
    specialities: "Droits des entreprises et gestion du patrimoine",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://blog.camping-saint-emilion.com/wp-content/uploads/2019/05/bordeaux2.jpg"
  },
  {
    name: "Lille",
    schoolName: "School 5",
    nbSchool: 8,
    pays: "France",
    places: 10,
    specialities: "Mecanique des fluides thermodynamique",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://www.voyageway.com/wp-content/uploads/2019/05/city-pass-lille-740x475.jpg"
  },
  {
    name: "Lille",
    schoolName: "School 6",
    nbSchool: 8,
    pays: "France",
    places: 10,
    specialities: "Sisi la famille",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://www.voyageway.com/wp-content/uploads/2019/05/city-pass-lille-740x475.jpg"
  }
];

class SchoolCards extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="SchoolCards__title">
          Ecoles disponibles à {this.props.match.params.city}
        </div>
        <div className="SchoolCards__container">
          {fakeCities.map(city => {
            if (city.name === this.props.match.params.city)
              return (
                  <CardItem city={city} />
              )
          })}
        </div>
      </>
    );
  }
}

export default SchoolCards;
