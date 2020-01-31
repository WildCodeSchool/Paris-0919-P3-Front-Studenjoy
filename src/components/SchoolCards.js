import React, { Component } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import decode from 'jwt-decode';

import Navbar from './Navbar';
import CardItem from "./CardItem";


class SchoolCards extends Component {
  state = {
    schools: undefined,
    loading: true,
  }

  notify = (message) => toast(message)

  handleStudentChoice = (e) => {
    // Check if user is connected
    const token = localStorage.getItem('token');
    if (!token){
      alert('Créez un compte pour choisir des écoles')
    } else {
      const decoded = decode(token);
      const userId = decoded.id
      const data = {
        student_id: userId,
        school_id: e.target.id,
        speciality_id: e.target.getAttribute('speciality_id'),
      }
      console.log(data)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.post('http://localhost:5000/students/application', data)
        .then(res => res.data)
        .catch(err => console.log(err))
    } 
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id)
    axios.get('http://localhost:5000/schools_specialized')
      .then(res => this.setState({
        schools: res.data.filter(school => school.school_id.toString() === this.props.match.params.id),
        loading: false
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <Navbar />
        {!this.state.loading &&
        <>
          <div className="SchoolCards__title">
            Ecoles disponibles à {this.state.schools[0].city}
          </div>
          <div className="SchoolCards__container">
            {this.state.schools.map(school => 
              <CardItem handleStudentChoice={this.handleStudentChoice} key={school.school_id} school={school} />
            )}
          </div>
        </>
        }
      </>
    );
  }
}

export default SchoolCards;
