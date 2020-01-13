import React, { Component } from 'react'
import Navbar from './Navbar'

class SearchResults extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="SearchResults">
          <h2 className="SearchResults__title">Résultats de votre recherche:</h2>
        </div>
      </>
    )
  }
}

export default SearchResults
