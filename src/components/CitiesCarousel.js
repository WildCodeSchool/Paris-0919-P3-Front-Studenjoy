import React from 'react';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CityItem from './CityItem';
import axios from 'axios';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class CitiesCarousel extends React.Component {
  state = {
    cities: undefined
  };

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/schools')
      .then(res =>
        this.setState({
          schools: res.data,
          cities: res.data.map(city => city.city)
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <section className="Cities" id="Cities">
        <Slider {...sliderSettings} className="Cities__container">
          {this.state.schools &&
            this.state.schools.map(school_city => (
              <Link key={school_city.id} to={`/schools/${school_city.id}`}>
                <CityItem
                  city={school_city}
                  numSchools={
                    this.state.cities.filter(city => city === school_city.city)
                      .length
                  }
                />
              </Link>
            ))}
        </Slider>
      </section>
    );
  }
}

export default CitiesCarousel;
