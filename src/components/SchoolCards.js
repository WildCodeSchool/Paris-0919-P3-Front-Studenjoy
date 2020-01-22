import React, { Component } from "react";

import Navbar from './Navbar';
import CardItem from "./CardItem";

import fakeSchools from '../fakeData/fakeSchools'

class SchoolCards extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="SchoolCards__title">
          Ecoles disponibles à {this.props.match.params.city}
        </div>
        <div className="SchoolCards__container">
          {fakeSchools.map(school => 
            school.city === this.props.match.params.city && <CardItem school={school} />
          )}
        </div>
      </>
    );
  }
}

export default SchoolCards;
