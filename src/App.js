import React from 'react';
import './styles/styles.scss';
import Navbar from './components/Navbar';
import CitiesCarousel from './components/CitiesCarousel';

const App = () => {
  return (
    <>
      <Navbar />
      <CitiesCarousel />
    </>
  );
};

export default App;
