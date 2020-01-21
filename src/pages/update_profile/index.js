import React, { Component } from 'react';
import './styles.css';
import { getSurvivor } from '../../model/survivor';

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
      <div className="Div">
        <div className="Box">
          <form className="Form">
            <input 
              placeholder="Name"
              type="text"
              value={survivor.name}
              name="name"
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
                value={survivor.age}
                onChange={this.handleChange}
                name="age"
              />

              <select
                className="Input__Small"
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
