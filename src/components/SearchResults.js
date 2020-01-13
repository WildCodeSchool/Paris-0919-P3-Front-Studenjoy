import React, { Component } from 'react'
import Navbar from './Navbar'

class SearchResults extends Component {
  render() {
    // GET SEARCH VALUES FROM COMPONENT SEARCHBAR
    const props = this.props.location.state 
    return (
      <>
        <Navbar />
        <div className="SearchResults">
          <h2 className="SearchResults__title">Résultats de votre recherche:</h2>
          {props.search.speciality && <p>Speciality: {props.search.speciality}</p>}
          {props.search.school && <p>School: {props.search.school}</p>}
          {props.search.city && <p>City: {props.search.city}</p>}
        </div>
      </>
    )
  }
}

export default SearchResults
