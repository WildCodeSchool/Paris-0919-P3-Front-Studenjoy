import React, { Component } from 'react'
import Navbar from './Navbar'

class SearchResults extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="SearchResults">
          <h2 className="SearchResults__title">Résultats de votre recherche:</h2>
          <p>{this.props.location.state.search}</p>
        </div>
      </>
    )
  }
}

export default SearchResults
