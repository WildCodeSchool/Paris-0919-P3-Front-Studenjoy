import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchBar extends React.Component {
  render(){
    return(
      <div className="SearchForm__container">
        <h1 className="SearchForm__title">Quel programme recherchez-vous ?</h1>
        <div className="SearchForm__form">
          <input
              className="SearchForm__input"
              placeholder="Specialités" 
          />
          <input
              className="SearchForm__input"
              placeholder="Ecoles, programmes" 
          />
          <input
              className="SearchForm__input"
              placeholder="Villes" 
          />
          <div className="SearchForm__submit_btn"><FontAwesomeIcon icon={faSearch} /></div>
        </div>
      </div>
    )
  };
};

export default SearchBar;