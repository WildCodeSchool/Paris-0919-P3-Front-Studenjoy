import React from 'react';
import decode from 'jwt-decode';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faUser,
  faGraduationCap,
  faComment
} from '@fortawesome/free-solid-svg-icons';

// import './styles/Navbar.scss';
import LogoText from '../images/LogoStudenjoyText.png';

class Navbar extends React.Component {
  state = {
    width: window.innerWidth,
    mobile: false,
    connected: false,
    userId: undefined
  };

  updateDimension = () => {
    if (this.state.width !== window.innerWidth) {
      this.setState({ width: window.innerWidth });
    }
    if (this.state.width < 650) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const decoded = token && decode(token);
    if (token && Date.now() >= decoded.exp * 1000) {
      localStorage.removeItem('token');
    }
    (token && decoded.id) && (this.setState({
      connected: true,
      userId: decoded.id
    }))

    // Conditionnal styling
    this.updateDimension();
    window.addEventListener('resize', this.updateDimension);
  }

  render() {
    return (
      <>
        <nav
          className={
            this.state.mobile
              ? 'Navbar__nav Navbar__nav--mobile'
              : 'Navbar__nav'
          }
        >
          <Link to="/" className="Navbar__logo">
            <img src={LogoText} alt="main-logo" />
          </Link>
          {!this.state.mobile && (
            <ul className="Navbar__items">
              {!this.state.connected ?
                <>
                  <Link to='/sign/in'><li className="Navbar__button">Connexion</li></Link>
                  <Link to='/sign/up'><li className="Navbar__button Navbar__button--primary">Inscription</li></Link>
                </>
              :
                <>
                  <li className="Navbar__item">Messages</li>
                  <li className="Navbar__item">Demandes</li>
                  <Link to={`/user_profile/${this.state.userId}`} className="Navbar__item">Profil</Link>
                </>
              }
            </ul>
          )}
        </nav>
        {this.state.mobile && (
          <div className="Navbar__mobile">
            <ul className="Navbar__items_mobile">
              {!this.state.connected ?
              <>
                <Link to='/sign/in'><li className="Navbar__item_mobile Navbar__item_mobile--main">Connexion</li></Link>
                <Link to='/sign/up'><li className="Navbar__item_mobile Navbar__item_mobile--main">Inscription</li></Link>
              </>
              :
              <>
                <li className="Navbar__item_mobile"><FontAwesomeIcon icon={faGraduationCap} /></li>
                <li className="Navbar__item_mobile"><FontAwesomeIcon icon={faFileAlt} /></li>
                <li className="Navbar__item_mobile"><FontAwesomeIcon icon={faComment} /></li>
                <Link to={`/user_profile/${this.state.userId}`}><li className="Navbar__item_mobile"><FontAwesomeIcon icon={faUser} /></li></Link>
              </>
              }
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Navbar;
