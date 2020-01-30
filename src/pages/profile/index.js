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

    const { data } = await getSurvivor(id);

    this.setState({
      survivor: data
    });
  }

  async loadInventory() {
    const { id } = this.props.match.params; 

    const { data } = await getInventory(id);
    console.log(data)

    this.setState({
      inventory: data
    });
  }

  render() {
    const { survivor, inventory } = this.state;

    return (
      <div className="ProfileDiv">
        <div className="Box">
          <div className="Labels">
            <h2 className="capitalize"><bold>{survivor.name}</bold></h2>
            <label>Age: {survivor.age}</label>
            <label>Gender: {survivor.gender}</label>
            <label>Location: {survivor.lonlat}</label>
            
            {inventory.map(item => 
              <label>{item.item.name}: {item.quantity}</label>
            )}
          </div>
        </div>
      </div>
    );
  }
}
