import React from 'react';
import Logo from '../images/LogoStudenjoy.png';

import Navbar from './Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

class UserProfile extends React.Component {
  state = {
    editing: false,
    firstName: 'John',
    lastName: 'Doe',
    mail: 'john.doe@gmail.com',
    birthDate: '30/10/1995',
    files: [],
    profilePicture: undefined,
    editPicture: false
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      editing: true
    });
  };

  handleFilesChange = e => {
    // Ici je veux récupérer le doc_type des documents
    const docType = e.target.name;
    // Ici je modifie l'objet récupéré en y incluant le doctype
    // C'est la seule solution que j'ai pu trouver, j'aurais aimé pouvoir faire une copie de l'objet pour ne pas le modifier directement
    // mais cela semble impossible car l'objet est vide au départ
    // Mais je ne pense pas que cela pose un problème ici parce que je ne modifie pas directement un objet qui est dans mon state
    e.target.files['0'].docType = docType;
    // Ici je récupère les objets des files uploadés
    const newFiles = [...this.state.files, ...e.target.files];
    this.setState({
      // Comment ajouter les doc_types ET les objets des fichiers en les associants ? Un objet dans le state ?
      files: newFiles,
      editing: true
    });
  };

  handleProfilePictureEdit = () => {
    this.setState({
      editPicture: !this.state.editPicture
    });
  };

  handleProfilePicture = e => {
    const profilePictureObj = URL.createObjectURL(e.target.files[0]);
    this.setState({
      profilePicture: profilePictureObj,
      editPicture: false,
      editing: true
    });
  };

  componentDidUpdate = () => {
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="UserProfile__container">
          <div className="UserProfile__header">
            <div className="UserProfile__picture">
              <img
                onClick={this.handleProfilePictureEdit}
                src={
                  this.state.profilePicture ? this.state.profilePicture : Logo
                }
                alt="profile"
              />
            </div>
            {this.state.editPicture && (
              <input
                type="file"
                name="profilePicture"
                onChange={this.handleProfilePicture}
              />
            )}
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
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="UserProfile__info">
              <span>Nom</span>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="UserProfile__info">
              <span>E-mail</span>
              <input
                type="text"
                name="mail"
                value={this.state.mail}
                onChange={this.handleChange}
              />
            </div>
            <div className="UserProfile__info">
              <span>Date de naissance</span>
              <input
                type="text"
                name="birthDate"
                value={this.state.birthDate}
                onChange={this.handleChange}
              />
            </div>

            <h2 className="UserProfile__subtitle">Documents administratifs</h2>
            {/*  LOOP THROUGH USER DOC_ADMINS + SORT BY TYPE*/}
            <div className="UserProfile__docs_container">
              <ul>
                {this.state.files &&
                  this.state.files.map(file => (
                    <li key={file.id}>
                      <span className="UserProfile__doc_type">Doc type</span>{' '}
                      {file.name}
                    </li>
                  ))}
              </ul>
              <div className="UserProfile__docs_upload">
                <span>CV</span>
                <input
                  type="file"
                  name="CV"
                  multiple
                  className="UserProfile__doc_input"
                  onChange={this.handleFilesChange}
                />
              </div>
              <div className="UserProfile__docs_upload">
                <span>Lettre de motivation</span>
                <input
                  type="file"
                  name="LM"
                  multiple
                  className="UserProfile__doc_input"
                  onChange={this.handleFilesChange}
                />
              </div>
              <div className="UserProfile__docs_upload">
                <span>Carte d'identité / Passeport</span>
                <input
                  type="file"
                  name="ID"
                  multiple
                  className="UserProfile__doc_input"
                  onChange={this.handleFilesChange}
                />
              </div>
            </div>

            {this.state.editing && (
              <div className="UserProfile__update_bar">
                <div className="UserProfile__button">
                  <FontAwesomeIcon icon={faEdit} />
                  Mettre à jour mon profil
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;
