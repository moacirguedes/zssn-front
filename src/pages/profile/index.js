import React, { Component } from 'react';
import './styles.css';
import { getSurvivor, getInventory } from '../../model/survivor';
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
  }

  handleUpdateButton = () => {
    const { id } = this.props.match.params;

    return `/profile/${id}/update`;
  }

  render() {
    const { survivor, inventory } = this.state;

    return (
      <div className="ProfileWrapper">
        <div className="Form">
          <h2 className="capitalize">{survivor.name}</h2>
          <label>Age: {survivor.age}</label>
          <label>Gender: {survivor.gender}</label>
          <label>Location: {survivor.lonlat}</label>

          <Inventory inventory={inventory} />

          <Link to={this.handleUpdateButton}>
            <button className="UpdateButton">Update</button>
          </Link>
        </div>
      </div>
    );
  }
}
