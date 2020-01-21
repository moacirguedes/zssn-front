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
          <div className="Inputs">
            <input></input>
            <input></input>
            <input></input>
            <input></input>
          </div>
        </div>
      </div>
    );
  }
}
