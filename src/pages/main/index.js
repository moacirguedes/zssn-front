import React, { Component } from 'react';
import './styles.css';
import { getSurvivors } from '../../model/survivor';

export default class Main extends Component {
  state = {
    survivors: []
  }

  componentDidMount() {
    this.loadSurvivors();
  }

  loadSurvivors = async () => {
    const data = await getSurvivors();

    this.setState({
      survivors: data
    });
  }

  render() {
    return (
      <div>
        {this.state.survivors.map(survivor => 
          <li key={survivor.location}>
            {survivor.name}
          </li>
        )}
      </div>
    );
  }
}
