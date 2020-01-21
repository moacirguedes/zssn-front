import React, { Component } from 'react';
import './styles.css';
import { getSurvivor, getInventory } from '../../model/survivor';

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

    if (response.status === 200) {
      this.setState({
        survivor: response.data
      });
    }
    else{
      this.props.history.goBack();
    }
  }

  async loadInventory() {
    const { id } = this.props.match.params;

    const response = await getInventory(id);

    if (response.status === 200) {
      this.setState({
        inventory: response.data
      });
    }
  }

  render() {
    const { survivor, inventory } = this.state;

    return (
      <div className="ProfileDiv">
        <div className="ProfileBox">
          <div className="Labels">
            <h2 className="capitalize"><bold>{survivor.name}</bold></h2>
            <label>Age: {survivor.age}</label>
            <label>Gender: {survivor.gender}</label>
            <label>Location: {survivor.lonlat}</label>

            {
              inventory.map(item =>
                <label key={item.location}>{item.item.name}: {item.quantity}</label>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
