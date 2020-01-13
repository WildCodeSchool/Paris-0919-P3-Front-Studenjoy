import React from 'react';
import './styles/styles.scss';
import CitiesCarousel from './components/CitiesCarousel';
import SearchBar from './components/SearchBar';
import HomeCarousel from './components/HomeCarousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <HomeCarousel />
      <SearchBar />
      <CitiesCarousel />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
