import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchBar extends React.Component {
  state= {
    speciality: '',
    school: '',
    city: ''
  }

  handleChange = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitSearch = () =>{
    console.log('ville :', this.state.city, ' ecole : ', this.state.school,'specialité :', this.state.speciality);
    this.props.history.push({
      pathname: '/results',
      state: { search: this.state.city }
    })
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