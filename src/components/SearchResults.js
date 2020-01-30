import React, { Component } from 'react';
import axios from 'axios';

import CardItem from './CardItem';
import Navbar from './Navbar';


class SearchResults extends Component {
  state = {
    search: {
      speciality: this.props.location.state.search.speciality,
      school: this.props.location.state.search.school,
      city: this.props.location.state.search.city,
    },
    schools: undefined,
    loading: false,
  }

  componentDidMount = () =>{
    axios.get(`http://localhost:5000/results?speciality=${this.state.search.speciality}&school=${this.state.search.school}&city=${this.state.search.city}`)
      .then(res => 
        res.data.length >= 1 &&
          this.setState({
            schools: res.data,
            loading: false
          })
      )
      .catch(err => console.log(err))
  }

  render() {
    // GET SEARCH VALUES FROM COMPONENT SEARCHBAR
    return (
      <>
        <Navbar />
        <div className="SearchResults">
          <h2 className="SearchResults__title">Résultats de votre recherche:</h2>
          <div className="SearchResults__results">
            {!this.state.loading &&
              (this.state.schools ?
                this.state.schools.map(school => 
                <CardItem key={school.id} school={school} />
              )
              :
              <h3>Aucune école trouvée pour votre recherche.</h3>)
            }
          </div>
        </div>
      </>
    )
  }
}

export default SearchResults
