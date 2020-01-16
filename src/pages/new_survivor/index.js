import React, { Component } from 'react';
import './styles.css';
import { postSurvivor } from '../../model/survivor';

export default class NewSurvivor extends Component {
  state = {
    name: '',
    age: '',
    gender: '',
    lonlat: '',
    water: '',
    food: '',
    medication: '',
    ammunition: ''
  }

  componentDidMount() {
    this.setState({
      gender: 'F'
    });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    await postSurvivor(this.state);

    alert('Survivor created');
  }

  render() {
    const { name, age, gender, lonlat, water, food, medication, ammunition } = this.state;

    return (
      <div className="NewSurvivorDiv">
        <div className="Box">
          <form
            className="Form"
            onSubmit={this.handleSubmit}
          >
            <input
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={this.handleChange}
            />

            <div className="LineInputs">
              <input
                className="Input__Small"
                placeholder="Age"
                type="number"
                min="2"
                max="100"
                required
                value={age}
                onChange={this.handleChange}
                name="age"
              />

              <select
                className="Input__Small"
                value={gender}
                onChange={this.handleChange}
                name="gender"
              >
                <option value="F">Female</option>
                <option value="M">Male</option>
              </select>

              <input
                placeholder="Location"
                value={lonlat}
                onChange={this.handleChange}
                name="lonlat"
                className="Input__Medium"
              />
            </div>

            <div className="LineInputs">
              <input
                className="Input__Small"
                placeholder="Water"
                type="number"
                min="0"
                required
                value={water}
                onChange={this.handleChange}
                name="water"
              />

              <input
                className="Input__Small"
                placeholder="Food"
                type="number"
                min="0"
                required
                value={food}
                onChange={this.handleChange}
                name="food"
              />

              <input
                className="Input__Small"
                placeholder="Medication"
                type="number"
                min="0"
                required
                value={medication}
                onChange={this.handleChange}
                name="medication"
              />

              <input
                className="Input__Small"
                placeholder="Ammunition"
                type="number"
                min="0"
                required
                value={ammunition}
                onChange={this.handleChange}
                name="ammunition"
              />
            </div>

            <button>Create</button>
          </form>
        </div>
      </div>
    );
  }
}
