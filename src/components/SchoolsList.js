import React, { Component } from 'react';

const fakeSchools = [
  {
    name: "School 1",
    city: "Paris",
    pays: "France",
    places: 10,
    specialities: "Management de l'innovation, Management Technologique",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784_20770_1.800w.jpg?ver=1575040255"
  },
  {
    name: "School 2",
    city: "Orleans",
    pays: "France",
    places: 10,
    specialities: "Commerce international",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img: "https://www.umanis.com/wp-content/uploads/2016/12/orleans-agence.png"
  },
  {
    name: "School 3",
    city: "Marseille",
    pays: "France",
    places: 10,
    specialities: "Management de projet secteur aeronotique",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://madeinmarseille.net/actualites-marseille/2017/11/date-cle-histoire-marseille.jpg"
  },
  {
    name: "Shool 4",
    city: "Bordeaux",
    pays: "France",
    places: 10,
    specialities: "Droits des entreprises et gestion du patrimoine",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://blog.camping-saint-emilion.com/wp-content/uploads/2019/05/bordeaux2.jpg"
  },
  {
    name: "School 5",
    city: "Lille",
    pays: "France",
    places: 10,
    specialities: "Mecanique des fluides thermodynamique",
    studenjoy: "0€",
    normal: "75€",
    fees: "12 500€",
    img:
      "https://www.voyageway.com/wp-content/uploads/2019/05/city-pass-lille-740x475.jpg"
  }
];


class SchoolsList extends Component {
  state = {
    schools: []
  };

  componentDidMount(){
    const city = this.props.match.params.city;
    this.setState({
      schools: fakeSchools.filter(school => school.city === city)
    })
  }

  render() {
    return (
      <div className="Schools__container">
        {this.state.schools && this.state.schools.map(school => school.name)}
      </div>
    )
  }
}

export default SchoolsList;
