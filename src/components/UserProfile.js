import React from 'react';
import Logo from '../images/LogoStudenjoy.png';

import Navbar from './Navbar';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

class UserProfile extends React.Component {
  state = {
    editing: false,
    firstName: 'John',
    lastName: 'Doe',
    mail: 'john.doe@gmail.com',
    birthDate: '30/10/1995',
  }

  editionMode = () =>{
    this.setState({
      editStatus: true
    })
    console.log(this.state.editStatus)
  }

  handleChange = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      editing: true,
    });
  }


  render() {
    return (
      <>
      <Navbar />
      <div className="UserProfile__container">
        <div className="UserProfile__header">
          <div className="UserProfile__picture"><img src={Logo} alt="profile"/></div>
          <div className="UserProfile__header--main_infos">
          <h1 className="UserProfile__title">Username here</h1>
            {/* <span>Profil complet <FontAwesomeIcon icon={faCheckCircle} /> </span> */}
            {/* <span>Profil incomplet <FontAwesomeIcon icon={faTimesCircle} /></span> */}
          </div>
        </div>
        <div className="UserProfile__body">
          <h2 className="UserProfile__subtitle">Informations principales</h2>
          <div className="UserProfile__info">
            <span>Prénom</span>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
          </div>
          <div className="UserProfile__info">
            <span>Nom</span>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>          
          </div>
          <div className="UserProfile__info">
            <span>E-mail</span>
            <input type="text" name="mail" value={this.state.mail} onChange={this.handleChange}/>          
          </div>
          <div className="UserProfile__info">
            <span>Date de naissance</span>
            <input type="text" name="birthDate" value={this.state.birthDate} onChange={this.handleChange}/>          
          </div>

          <h2 className="UserProfile__subtitle">Documents administratifs</h2>
          {/*  LOOP THROUGH USER DOC_ADMINS + SORT BY TYPE*/}
          <div className="UserProfile__docs_container">
            <ul>
              <li>
                <span className="UserProfile__doc_type">Doc type</span> doc_name
              </li>
            </ul>
            <div className="UserProfile__doc_upload">
              upload here
            </div>
          </div>
          {this.state.editing && <div className="UserProfile__update_bar">
            <div className="UserProfile__button"><FontAwesomeIcon icon={faEdit} />Mettre à jour mon profil</div>
          </div>}
        </div>
      </div>
      </>
    )
  }
}

export default UserProfile;
