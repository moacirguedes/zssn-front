import React, { Component } from 'react';
import './styles.css';
import { getSurvivors } from '../../model/survivor';
import Table from '../../components/table'

export default class Main extends Component {
  state = {
    survivors: []
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

  render() {
    const { survivors } = this.state;

    return (
      survivors.length === 0 ?
        <div className="Loader"></div> :
        <Table survivors={survivors} />
    );
  }
}
