import React from 'react';

import { Link } from 'react-router-dom';
import Slider from "react-slick";
import CityItem from "./CityItem";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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
    cities: undefined,
  }
  render() {
    return (
      <section className="Cities" id="Cities">
        <Slider {...sliderSettings} className="Cities__container">
            {this.state.cities && 
            this.state.cities.map(city => 
              <Link key={city.id} to={`/schools/${city.name}`}>
                <CityItem  city={city}/>
              </Link>
            )}
        </Slider>
      </section>
    );
  }
};

export default CitiesCarousel;
