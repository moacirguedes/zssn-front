import React, { Component } from 'react';
import './styles.css';
import { getSurvivors } from '../../model/survivor';
import Table from '../../components/table';
import { StatusCode } from '../../services/httpService';

export default class Main extends Component {
  state = {
    survivors: []
  }

  componentDidMount() {
    this.loadSurvivors();
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

  render() {
    const { survivors } = this.state;

    return (
      !survivors ?
        <div className="Loader"></div> :
        <Table
          data-testid="survivors-table"
          survivors={survivors}
        />
    );
  }
}
