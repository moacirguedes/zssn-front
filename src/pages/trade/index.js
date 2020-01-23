import React, { Component } from 'react';
import './styles.css';
import { getSurvivors, reportInfected } from '../../model/survivor';
import { StatusCode } from '../../services/httpService';
import SurvivorOptions from '../../components/survivor_options';

export default class Trade extends Component {
  state = {
    survivors: [],
    firstSurvivor: '',
    secondSurvior: ''
  }

  componentDidMount() {
    this.loadSurvivors();
  }

  async loadSurvivors() {
    const data = await getSurvivors();

    this.setState({
      survivors: data
    });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { reporter, infected } = this.state;

    const response = await reportInfected(reporter, infected);

    if (response.status === StatusCode.NO_CONTENT) alert('Survivor reported');
  }

  render() {
    const { survivors, firstSurvivor, secondSurvior } = this.state;

    return (
      <div className="TradeWrapper">
        <form className="Form" onSubmit={this.handleSubmit}>
          <label>First Survivor</label>
          <select
            value={firstSurvivor}
            name="firstSurvivor"
            onChange={this.handleChange}
            required
          >
            <SurvivorOptions
              survivors={survivors}
            />
          </select>

          <label>Second Survivor</label>
          <select
            value={secondSurvior}
            name="secondSurvior"
            onChange={this.handleChange}
            required
          >
            <SurvivorOptions
              survivors={survivors}
            />
          </select>

        </form>
      </div>
    );
  }
}
