import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./SchoolCards.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import DashboardItem from "./DashboardItem";

const fakeCities = [
  {
    name: "Paris",
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
    nbSchool: 8,
    pays: "France",
    places: 10,
    specialities: "Mecanique des fluides thermodynamique",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://www.voyageway.com/wp-content/uploads/2019/05/city-pass-lille-740x475.jpg"
  }
];

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="Dashboard__title">Mes demandes</div>
        {/* <Link to="/">
          <button className="SchoolCards__Home__button">Home</button>
        </Link> */}
        {fakeCities.map(city => {
          //   if (city.nbSchool === parseInt(this.props.match.params.id))
          return <DashboardItem city={city} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
