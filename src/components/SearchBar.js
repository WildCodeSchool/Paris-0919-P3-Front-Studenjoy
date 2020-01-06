import React from 'react'





export default class SearchBar extends React.Component {


    render(){
        return(

            <div className="Container">
            <h1>Quel programmes choisir</h1>
            <div className="SearchForm">
              <input
                 className="Speciality__Search"
                 placeholder="Speciality" 
              />
              <input
                 className="School__Search"
                 placeholder="Ecoles, programmes" 
              />
              <input
                 className="Town__Search"
                 placeholder="Villes" 
              />
            <div className="submitBtn"><i className="fa fa-search"></i></div>
            </div>
            </div>
        )
    }
}