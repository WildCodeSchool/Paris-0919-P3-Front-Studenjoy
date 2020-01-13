import React from 'react';
import './styles/styles.scss';
import Navbar from './components/Navbar';
import CitiesCarousel from './components/CitiesCarousel';
import SearchBar from './components/SearchBar';
import HomeCarousel from './components/HomeCarousel';
import ContactForm from './components/ContactForm';


class App extends React.Component  {
  render() {
    return (
      <>
        <Navbar />
        <HomeCarousel />
        <SearchBar history={this.props.history}/>
        <CitiesCarousel />
        <ContactForm />
      </>
    );
  }
};

export default App;
