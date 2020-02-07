import React, { Component } from 'react';
import './styles.css';
import { getSurvivors, reportInfected } from '../../model/survivor';
import { StatusCode } from '../../services/httpService';

export default class ReportInfected extends Component {
  state = {
    survivors: [],
    reporter: '',
    infected: ''
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

  handleLocation(location) {
    return location.substring(location.lastIndexOf('/') + 1);
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
    const { survivors, reporter, infected } = this.state;

    return (
      <div className="ReportInfectedDiv">
        <div className="ReportInfectedBox">
          <form className="ReportInfectedForm" onSubmit={this.handleSubmit}>
            <label>Reporter</label>
            <select
              value={reporter}
              name="reporter"
              onChange={this.handleChange}
              required
            >
              <option disabled></option>
              
              {survivors.map(survivor =>
                <option
                  key={survivor.location}
                  value={this.handleLocation(survivor.location)}
                >
                  {survivor.name}
                </option>
              )}
            </select>

            <label>Infected</label>
            <select
              value={infected}
              name="infected"
              onChange={this.handleChange}
              required
            >
              <option disabled></option>

              {survivors.map(survivor =>
                <option
                  key={survivor.location}
                  value={this.handleLocation(survivor.location)}
                >
                  {survivor.name}
                </option>
              )}
            </select>

            <button>Submit report</button>
          </form>
        </div>
      </div>
    );
  }
}
