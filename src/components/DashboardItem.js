import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

class DashboardItem extends Component {
  state = {
    showDetail: false,
  }

  showDetail = () => {
    this.setState({
      showDetail: !this.state.showDetail,
    })
  }

  render() {
    return (
      <>
        <div className="Dashboard__item">
          <div className="Dashboard__item_header" onClick={this.showDetail}>
            <FontAwesomeIcon icon={this.state.showDetail ? faArrowAltCircleDown : faArrowAltCircleRight} />
            <h3> {this.props.application.school_name}</h3>
            <div className="Dashboard__speciality">{this.props.application.speciality_name}</div>
            <div className="Dashboard__status">Demande en cours</div>
          </div>
          <div className={this.state.showDetail ? "Dashboard__body" : "Dashboard__body Dashboard__body--hidden"}>
            <ul>
              <li>Adresse: {this.props.application.school_address}, {this.props.application.city}</li>
              <li>Mail: {this.props.application.email}</li>
              <li>Téléphone: {this.props.application.phone}</li>
            </ul>
            <div className="Dashboard__delete_button" onClick={this.props.deleteChoice} school_id={this.props.application.school_id} speciality_id={this.props.application.speciality_id}>Supprimer cette demande</div>
          </div>
        </div>
      </>
    )
  }
}

export default DashboardItem;
