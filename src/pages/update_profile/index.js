import React, { Component } from 'react';
import './styles.css';
import { getSurvivor, updateSurvivor } from '../../model/survivor';

export default class UpdateProfile extends Component {
  state = {
    survivor: ''
  }

  componentDidMount() {
    this.loadSurvivor();
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => {
      let survivor = prevState.survivor;
      survivor[name] = value;
      return { survivor };
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { id } = this.props.match.params;
    const { survivor } = this.state;

    await updateSurvivor(id, survivor);
  }

  async loadSurvivor() {
    const { id } = this.props.match.params;

    const { data } = await getSurvivor(id);

    this.setState({
      survivor: data
    });
  }

  render() {
    const { survivor } = this.state;

    return (
      <div className="UpdateProfileDiv">
        <div className="UpdateProfileBox">
          <form className="UpdateProfileForm" onSubmit={this.handleSubmit}>
            <input 
              placeholder="Name"
              type="text"
              value={survivor.name}
              name="name"
              onChange={this.handleChange}
            />

            <div className="LineInputs">
              <input
                className="UpdateInput__Small"
                placeholder="Age"
                type="number"
                min="2"
                max="100"
                required
                value={survivor.age}
                onChange={this.handleChange}
                name="age"
              />

              <select
                className="UpdateInput__Small"
                value={survivor.gender}
                onChange={this.handleChange}
                name="gender"
              >
                <option value="F">Female</option>
                <option value="M">Male</option>
              </select>
            </div>

            <input
              placeholder="Location (Example: POINT (-1.0 1.0) )"
              name="lonlat"
              value={survivor.lonlat}
              onChange={this.handleChange}
            />

            <button>Update</button>
          </form>
        </div>
      </div>
    );
  }
}
