import React from 'react';
import decode from 'jwt-decode';
import axios from 'axios';
import Logo from '../images/LogoStudenjoy.png';

import Navbar from './Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

class UserProfile extends React.Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    mail: undefined,
    birthDate: undefined,
    files: [], 
    message:'',
    profilePicture: undefined,
    editing: false,
    editPicture: false,
    userFile : []
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decode(token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      if (Date.now() >= decoded.exp * 1000) {
          localStorage.removeItem('token');
          console.log(' Token expired');
      } else {
          axios.get(`http://localhost:5000/students/`)
            .then(res => this.setState({
              firstName: res.data[0].first_name,
              lastName: res.data[0].last_name,
              mail: res.data[0].email,
              birthDate: res.data[0].date_of_birth,
            }))
            .catch(err => console.log(err))  
      }
    }
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

  handleFilesChange = (e) => {
    // Ici je veux récupérer le doc_type des documents 
    const docType = e.target.name
    // Ici je récupère les objets des files uploadés
    const newFiles = [...this.state.files, ...e.target.files]
    this.setState({
      // Comment ajouter les doc_types ET les objets des fichiers en les associants ? Un objet dans le state ?
      files: newFiles,
      editing: true,
    })
  }

  sendFiles = (e) => {
    e.preventDefault();
    const files = this.state.files;
    const dataToSend = new FormData();
    for (const key of Object.keys(files)){
      dataToSend.append('file', this.state.files[key])
    }
    axios.post(`http://localhost:5000/students/documents/`, dataToSend)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }


   getUserFiles = () => {
     axios.get(`http://localhost:5000/students/doc/`)
      .then(res =>{ 
        this.setState({
          userFile : res.data 
        })
      })
      .catch(err => console.log(err))
   }

   delete = (e) => {
    const id = e.target.value;
    axios.delete(`http://localhost:5000/students/documents/${id}`)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
   }


  handleProfilePictureEdit = () => {
    this.setState({
      editPicture: !this.state.editPicture,
    })
  }

  handleProfilePicture = (e) => {
    const profilePictureObj = URL.createObjectURL(e.target.files[0])
    this.setState({
      profilePicture: profilePictureObj,
      editPicture: false,
      editing: true,
    })
  }


  render() {
      console.log(this.state.userFile)
    return (
      <>
      <Navbar />
      <div className="UserProfile__container">
        <div className="UserProfile__header">
          <div className="UserProfile__picture">
            <img onClick={this.handleProfilePictureEdit} src={this.state.profilePicture ? this.state.profilePicture : Logo} alt="profile"/>
          </div>
          {this.state.editPicture && <input type="file" name="profilePicture" onChange={this.handleProfilePicture}/>}
          <div className="UserProfile__header--main_infos">
          <h1 className="UserProfile__title">{this.state.firstName}</h1>
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
            <input type="date" name="birthDate" value={this.state.birthDate} onChange={this.handleChange}/>          
          </div>

          <h2 className="UserProfile__subtitle">Documents administratifs</h2>
          {/*  LOOP THROUGH USER DOC_ADMINS + SORT BY TYPE*/}
          <div className="UserProfile__docs_container">
            <ul> 
            {this.state.files && this.state.files.map(file => 
                <li>
                  <span className="UserProfile__doc_type">{file.doc_type}</span> {file.doc_name}
                </li>
            )}
            </ul>
            <div className="UserProfile__docs_upload">
              <span>CV</span>
              <input type="file" name="CV" multiple className="UserProfile__doc_input" onChange={this.handleFilesChange}/> 
                       
            </div>
            <div className="UserProfile__docs_upload">
              <span>Lettre de motivation</span>
              <input type="file" name="LM" multiple className="UserProfile__doc_input" onChange={this.handleFilesChange}/>  
                 
            </div>
            <div className="UserProfile__docs_upload">
              <span>Carte d'identité / Passeport</span>
              <input type="file" name="ID" multiple className="UserProfile__doc_input" onChange={this.handleFilesChange}/>
                       
            </div>
          </div>

          <div>

              <h5>Ici mes fichiers</h5>

              {
                this.state.userFile ? 
                  this.state.userFile.map((file, i) => 
                  
                    <ul>
                      <li key={i}>{file.id} <button value={file.id} onClick={this.delete}>Supprimer</button></li>
                    </ul>
                  ) : ''              
              }
            
          </div>

          <button type="submit" onClick={this.sendFiles}>Envoyer</button>

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
