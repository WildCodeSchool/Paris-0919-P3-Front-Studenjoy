import React, { Component } from 'react';

import CardItem from './CardItem';
import Navbar from './Navbar';

import fakeSchools from '../fakeData/fakeSchools';

class SearchResults extends Component {
  state = {
    schools: undefined
  }

  componentDidMount = () =>{
    let schoolsData = fakeSchools.filter(elm => elm.city === this.props.location.state.search.city) 
    schoolsData.length > 0 && this.setState({ schools: schoolsData })
  }

  render() {
    // GET SEARCH VALUES FROM COMPONENT SEARCHBAR
    const props = this.props.location.state 
    return (
      <>
        <Navbar />
        <div className="SearchResults">
          <h2 className="SearchResults__title">Résultats de votre recherche:</h2>
          <div className="SearchResults__results">
            {props.search.city && 
            this.state.schools ?
              this.state.schools.map(school => 
              <CardItem school={school} />
            )
            :
            <h3>Aucune école trouvée pour votre recherche.</h3>
          }
          </div>
        </div>
      </>
    )
  }
}

export default SearchResults
