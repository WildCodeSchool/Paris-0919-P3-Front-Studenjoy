import React from 'react';
import Slider from "react-slick";
import CityItem from './CityItem';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
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

const fakeCities = [
  {
    name: 'Paris',
    nbSchool : 15,
    img:'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784_20770_1.800w.jpg?ver=1575040255',
  },
  {
    name: 'Orleans',
    nbSchool : 2,
    img:'https://www.umanis.com/wp-content/uploads/2016/12/orleans-agence.png',
  },
  {
    name: 'Marseille',
    nbSchool : 5,
    img:'https://madeinmarseille.net/actualites-marseille/2017/11/date-cle-histoire-marseille.jpg',
  },
  {
    name: 'Bordeaux',
    nbSchool : 6,
    img:'https://blog.camping-saint-emilion.com/wp-content/uploads/2019/05/bordeaux2.jpg',
  },
  {
    name: 'Lille',
    nbSchool : 8,
    img: 'https://www.voyageway.com/wp-content/uploads/2019/05/city-pass-lille-740x475.jpg',
  },
]

const CitiesCarousel = () => {
  return (
    <section>
      <Slider {...sliderSettings} className="Cities__container">
          {fakeCities.map(city => 
            <CityItem city={city}/>
          )}
      </Slider>
    </section>
  )
}

export default CitiesCarousel
