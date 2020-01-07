import React from 'react';
import './styles/styles.scss';
import Navbar from './components/Navbar';
import CitiesCarousel from './components/CitiesCarousel';
import SearchBar from './components/SearchBar';
import HomeCarousel from './components/HomeCarousel';


const App = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <SearchBar />
      <CitiesCarousel />
    </>
  );
};

export default App;
