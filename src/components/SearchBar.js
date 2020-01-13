import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchBar extends React.Component {
  state= {
    search: {
      speciality: '',
      school: '',
      city: ''
    }
  }

  handleChange = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
        search: {
          ...prevState.search,
          [name]: value
        }
      })
    )
  };

  submitSearch = () =>{
    (this.state.search.speciality || this.state.search.school || this.state.search.city) ?
      this.props.history.push({
        pathname: '/results',
        state: { search: this.state.search }
      })
    :
      alert('Entrez des valeurs')
  }

  render(){
    return(
      <div className="SearchForm__container">
        <h1 className="SearchForm__title">Quel programme recherchez-vous ?</h1>
        <div className="SearchForm__form">
          <input
              name="speciality"
              className="SearchForm__input"
              placeholder="Specialités"
              onChange={this.handleChange}
              value={this.state.speciality} 
          />
          <input
              name="school"
              className="SearchForm__input"
              placeholder="Ecoles, programmes"
              onChange={this.handleChange}
              value={this.state.school} 
          />
          <input
              name="city"
              className="SearchForm__input"
              placeholder="Villes" 
              onChange={this.handleChange}
              value={this.state.city}
          />
          <div className="SearchForm__submit_btn" onClick={this.submitSearch}><FontAwesomeIcon icon={faSearch} /></div>
        </div>
      </div>
    )
  };
};

export default SearchBar;