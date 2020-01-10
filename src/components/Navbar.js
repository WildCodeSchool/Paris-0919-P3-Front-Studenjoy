import React from 'react';

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
    mobile: false
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
              {/* User not connected */}
              <Link to='/sign/up'><li className="Navbar__button">Connexion</li></Link>
              <Link to='/sign/in'><li className="Navbar__button Navbar__button--primary">Inscription</li></Link>
              {/* End user not connected */}

              {/* User connected */}
              {/* <li className="Navbar__item">Item</li>
              <li className="Navbar__item">Demandes</li>
              <Link to="/user_profile/1" className="Navbar__item">Profil</Link> CHANGE USER ID HERE */}
              {/* End User connected */}
            </ul>
          )}
        </nav>
        {this.state.mobile && (
          <div className="Navbar__mobile">
            <ul className="Navbar__items_mobile">
              {/* User not connected */}
              <Link to='/sign/up'><li className="Navbar__item_mobile Navbar__item_mobile--main">Connexion</li></Link>
              <Link to='/sign/in'><li className="Navbar__item_mobile Navbar__item_mobile--main">Inscription</li></Link>
              {/*  End User not connected */}

              {/*  User connected */}
              {/* <li className="Navbar__item_mobile"><FontAwesomeIcon icon={faGraduationCap} /></li>
              <li className="Navbar__item_mobile"><FontAwesomeIcon icon={faFileAlt} /></li>
              <li className="Navbar__item_mobile"><FontAwesomeIcon icon={faComment} /></li>
              <li className="Navbar__item_mobile"><FontAwesomeIcon icon={faUser} /></li> */}
              {/*  End User connected */}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Navbar;
