import React, { Component } from 'react';
import './styles.css';
import { getSurvivors, getInventory, getSurvivor } from '../../model/survivor';
import SurvivorOptions from '../../components/survivor_options';
import TradeItens from '../../components/trade_itens';
import { StatusCode } from '../../services/httpService';

export default class Trade extends Component {
  state = {
    survivors: [],
    firstSurvivor: '',
    secondSurvivor: '',
    firstInventory: '',
    secondInventory: '',
    secondSurvivorName: ''
  }

  componentDidMount() {
    this.loadSurvivors();
  }

  reloadInventories = () => {
    this.loadFirstInventory();
    this.loadSecondInventory();
  }

  async loadSurvivors() {
    const response = await getSurvivors();

    if (response.status === StatusCode.OK_STATUS) {
      this.setState({
        survivors: response.data
      });
    }
    else{
      alert('Failed to load survivors');
    }
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
      }, await this.getSecondSurvivorName());
    }
  }

  async getSecondSurvivorName() {
    const { data } = await getSurvivor(this.state.secondSurvivor);

    this.setState({
      secondSurvivorName: data.name
    });
  }

  render() {
    const { 
      survivors, 
      firstSurvivor, 
      secondSurvivor, 
      firstInventory, 
      secondInventory, 
      secondSurvivorName 
    } = this.state;

    return (
      <>
        <div className="TradeWrapper">
          <div className="Form">
            <label>Person</label>
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

            <label>Consumer</label>
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
            firstSurvivorId={firstSurvivor}
            secondSurvivorName={secondSurvivorName}
            reloadInventories={this.reloadInventories}
          />
        }
      </>
    );
  }
}
