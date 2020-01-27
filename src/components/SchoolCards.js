import React, { Component } from "react";

import axios from 'axios';

import Navbar from './Navbar';
import CardItem from "./CardItem";


class SchoolCards extends Component {
  state = {
    schools: undefined,
    loading: true,
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/schools')
      .then(res => this.setState({
        schools: res.data.filter(school => school.city === this.props.match.params.city),
        loading: false
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="SchoolCards__title">
          Ecoles disponibles à {this.props.match.params.city}
        </div>
        <div className="SchoolCards__container">
          {!this.state.loading && this.state.schools.map(school => 
            <CardItem key={school.id} school={school} />
          )}
        </div>
      </>
    );
  }
}

export default SchoolCards;
