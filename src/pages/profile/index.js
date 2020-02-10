import React, { Component } from 'react';
import './styles.css';
import { getSurvivor, getInventory, infectedStatusToString } from '../../model/survivor';
import { Link } from 'react-router-dom';
import { StatusCode } from '../../services/httpService';
import Inventory from '../../components/inventory';

export default class Profile extends Component {
  state = {
    survivor: '',
    inventory: []
  }

  componentDidMount() {
    this.loadSurvivor();
    this.loadInventory();
  }

  async loadSurvivor() {
    const { id } = this.props.match.params;

    const response = await getSurvivor(id);

    if (response.status === StatusCode.OK_STATUS) {
      this.setState({
        survivor: response.data
      });
    }
    else {
      alert('Survivor not found');
      this.props.history.goBack();
    }
  }

  async loadInventory() {
    const { id } = this.props.match.params;

    const response = await getInventory(id);

    if (response.status === StatusCode.OK_STATUS) {
      this.setState({
        inventory: response.data
      });
    }
    else {
      alert('Failed to load inventory');
    }
  }

  linkToUpdateProfile = () => {
    const { id } = this.props.match.params;

    return `/profile/${id}/update`;
  }

  render() {
    const { survivor, inventory } = this.state;

    return (
      <div className="ProfileWrapper">
        <div className="Form" data-testid="survivor-profile">
          <h2 data-testid="name" className="capitalize">{survivor.name}</h2>
          <label data-testid="age">Age: {survivor.age}</label>
          <label data-testid="gender">Gender: {survivor.gender}</label>
          <label data-testid="lonlat">Location: {survivor.lonlat}</label>
          <label data-testid="infected">Infected: {infectedStatusToString(survivor.infected)}</label>

          <Inventory inventory={inventory} />

          <Link to={this.linkToUpdateProfile} data-testid="update-button">
            <button className="UpdateButton">Update</button>
          </Link>
        </div>
      </div>
    );
  }
}
