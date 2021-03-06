import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Logo from '../images/LogoStudenjoy.png';


class Sign extends Component {
  state = {
    signIn: true
  };

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

  render() {
    return (
      <>
        <Link to="/"><div className="Sign__home_link"><FontAwesomeIcon icon={faArrowLeft} /> Retour</div></Link>
        <div className="Sign__container">
          <h1 className="Sign__title">
            {this.state.signIn ? 'Inscription' : 'Connexion'}{' '}
            <img className="Sign__logo" src={Logo} alt="Studenjoy logo" />
          </h1>
          <form>
            {this.state.signIn && (
              <input
                className="Sign__input"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
            )}
            {this.state.signIn && (
              <input
                className="Sign__input"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            )}
            <input
              className="Sign__input"
              type="mail"
              name="mail"
              placeholder="Mail"
            />
            <input
              className="Sign__input"
              type="password"
              name="password"
              placeholder="Password"
            />
            {!this.state.signIn && (
              <div className="Sign__checkbox">
                <input type="checkbox" name="rememberMe" />
                <label for="rememberMe">Se souvenir de moi</label>
              </div>
            )}
            {this.state.signIn ? (
              <input
                className="Sign__button"
                type="submit"
                value="S'inscrire"
              />
            ) : (
              <input
                className="Sign__button"
                type="submit"
                value="Se connecter"
              />
            )}
          </form>
        </div>
      </>
    );
  }
}

export default Sign;
