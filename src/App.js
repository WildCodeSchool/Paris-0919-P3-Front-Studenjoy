import React from 'react';
import './styles/styles.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import CitiesCarousel from './components/CitiesCarousel';
import SearchBar from './components/SearchBar';
import HomeCarousel from './components/HomeCarousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


class App extends React.Component  {
  render() {
    return (
      <>
        <ToastContainer
          toastClassName="Toast__container"
          bodyClassName="Toast__body"
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
        />
        <Navbar history={this.props.history}/>
        <HomeCarousel />
        <SearchBar history={this.props.history}/>
        <CitiesCarousel />
        <ContactForm />
        <Footer />
      </>
    );
  }
};

export default App;
