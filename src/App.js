import React from 'react';
import './styles/styles.scss';
import Navbar from './components/Navbar';
import CitiesCarousel from './components/CitiesCarousel';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <>
      <Navbar />
      <CitiesCarousel />
      <SearchBar />
    </>
  );
};

export default App;
