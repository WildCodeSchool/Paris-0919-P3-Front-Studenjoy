import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import Logo from '../images/LogoStudenjoy.png';


class Sign extends Component {
  state = {
    signIn: true,
    firstName: undefined,
    lastName: undefined,
    mail: undefined,
    password: undefined,
    date_of_birth: undefined,
    phone: undefined,
  };

  notify = (message) => toast(message)

  handleChange = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  componentDidMount(){
    const connexionParam = this.props.match.params.connexion;
    connexionParam === "in" ? 
    this.setState({
      signIn: true,
    })
    :
    this.setState({
      signIn: false,
    })
  }

  handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Fill user object with state
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.mail,
      student_password: this.state.password,
      date_of_birth: this.state.date_of_birth,
      phone: this.state.phone,
    };
    // Validate that all inputs are filled
    user.first_name && user.last_name && user.email && user.date_of_birth && user.student_password && user.phone 
    ?
      // Post data to database
      axios.post('http://localhost:5000/signup', user)
        .then(res => res.data.token &&
          localStorage.setItem('token', res.data.token)
        )
        .catch(err => console.log(err))
        .then(() => this.props.history.push({
          pathname: '/',
        }))
        .then(() => this.notify('Bienvenue chez Studenjoy !'))
    :
      alert('Please fill all the inputs')
  }

  handleSignInSubmit = (e) => {
    e.preventDefault();
    // Fill user object with state
    const user = {
      email: this.state.mail,
      student_password: this.state.password,
    };
    // Validate that all inputs are filled
    user.email && user.student_password
    ?
      // Post data to database
      axios.post('http://localhost:5000/signin', user)
        .then(res => res.data.token &&
          localStorage.setItem('token', res.data.token)
        )
        .then(() => this.props.history.push({
          pathname: '/',
        }))
        .then(() => this.notify('Bon retour parmi nous !'))
    :
      alert('Please fill all the inputs')
  }


  render() {
    return (
      <>
        <Link to="/"><div className="Sign__home_link"><FontAwesomeIcon icon={faArrowLeft} /> Retour</div></Link>
        <div className="Sign__container">
          <h1 className="Sign__title">
            {this.state.signIn ? 'Connexion' : 'Inscription'}{' '}
            <img className="Sign__logo" src={Logo} alt="Studenjoy logo" />
          </h1>
          <form>
            {!this.state.signIn && (
              <>
                <input
                  className="Sign__input"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="Sign__input"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  required
                />
              </>
            )}
            <input
              className="Sign__input"
              type="mail"
              name="mail"
              placeholder="Mail"
              value={this.state.mail}
              onChange={this.handleChange}
              required
            />
            <input
              className="Sign__input"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            {!this.state.signIn && (
              <>
                <input
                  className="Sign__input"
                  type="date"
                  name="date_of_birth"
                  placeholder="Birth date"
                  value={this.state.date_of_birth}
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="Sign__input"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  required
                />
              </>
            )}
            {this.state.signIn && (
              <div className="Sign__checkbox">
                <input type="checkbox" name="rememberMe" />
                <label htmlFor="rememberMe">Se souvenir de moi</label>
              </div>
            )}
            {!this.state.signIn ? (
              <input
                className="Sign__button"
                type="submit"
                value="S'inscrire"
                onClick={this.handleSignUpSubmit}
              />
            ) : (
              <input
                className="Sign__button"
                type="submit"
                value="Se connecter"
                onClick={this.handleSignInSubmit}
              />
            )}
          </form>
        </div>
      </>
    );
  }
}

export default Sign;
