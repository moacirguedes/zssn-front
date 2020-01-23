import React, { Component } from 'react';
import './styles.css';
import { getSurvivors, getInventory } from '../../model/survivor';
import SurvivorOptions from '../../components/survivor_options';
import TradeItens from '../../components/trade_itens';
import { StatusCode } from '../../services/httpService';

export default class Trade extends Component {
  state = {
    survivors: [],
    firstSurvivor: '',
    secondSurvivor: '',
    firstInventory: '',
    secondInventory: ''
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

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    }, () => {
      if (this.state.firstSurvivor !== '') this.loadFirstInventory();
      if (this.state.secondSurvivor !== '') this.loadSecondInventory();
    });
  }

  async loadFirstInventory() {
    const response = await getInventory(this.state.firstSurvivor);

    if (response.status === StatusCode.OK_STATUS) {
      this.setState({
        firstInventory: response.data
      });
    }
  }

  async loadSecondInventory() {
    const response = await getInventory(this.state.secondSurvivor);

    if (response.status === StatusCode.OK_STATUS) {
      this.setState({
        secondInventory: response.data
      });
    }
  }

  render() {
    const { survivors, firstSurvivor, secondSurvivor, firstInventory, secondInventory } = this.state;

    return (
      <>
        <div className="TradeWrapper">
          <div className="Form">
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
              value={secondSurvivor}
              name="secondSurvivor"
              onChange={this.handleChange}
              required
              disabled={!firstSurvivor}
            >
              <SurvivorOptions
                survivors={survivors}
              />
            </select>
          </div>
        </div>

        {firstInventory && secondInventory &&
          <TradeItens
            firstInventory={firstInventory}
            secondInventory={secondInventory}
          />
        }
      </>
    );
  }
}
