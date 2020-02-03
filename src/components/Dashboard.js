import React, { Component } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import Navbar from './Navbar';
import DashboardItem from './DashboardItem';

class Dashboard extends Component {
  state = {
    applications: {},
    isLoaded: false,
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decode(token);
      const userId = decoded.id
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      if (Date.now() >= decoded.exp * 1000) {
          localStorage.removeItem('token');
          console.log(' Token expired');
      } else {
          axios.get(`http://localhost:5000/students/application`, userId)
            .then(res => this.setState({
              applications: res.data,
              isLoaded: true,
            }))
            .catch(err => console.log(err))  
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='Dashboard__container'>
          <div className="Dashboard__header">Vous avez {this.state.applications.length} demandes en cours.</div>
          {(this.state.isLoaded && this.state.applications.length >= 1) &&
            this.state.applications.map(application => <DashboardItem application={application}/>)
          }
        </div>
      </div>
    )
  }
}

export default Dashboard;
