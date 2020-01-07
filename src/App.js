import React from 'react';
import './styles/styles.scss';
import CitiesCarousel from './components/CitiesCarousel';
import SearchBar from './components/SearchBar';
import HomeCarousel from './components/HomeCarousel';
import ContactForm from './components/ContactForm';


const App = () => {
  return (
    <>
      <HomeCarousel />
      <SearchBar />
      <CitiesCarousel />
      <ContactForm />
    </>
  );
};

export default App;
