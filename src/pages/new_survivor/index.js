import React, { Component } from 'react';
import './styles.css';
import { postSurvivor } from '../../model/survivor';
import Form from '../../components/form';

export default class NewSurvivor extends Component {
  state = {
    name: '',
    age: '',
    gender: '',
    lonlat: '',
    water: '',
    food: '',
    medication: '',
    ammunition: ''
  }

  componentDidMount() {
    this.setState({
      gender: 'F'
    });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    await postSurvivor(this.state);

    alert('Survivor created');
  }

  render() {
    const { name, age, gender, lonlat, water, food, ammunition, medication } = this.state

    return (
      <div className="NewSurvivorDiv">
        <div className="Box">
          <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            name={name}
            age={age}
            gender={gender}
            lonlat={lonlat}
            water={water}
            food={food}
            ammunition={ammunition}
            medication={medication}
          />
        </div>
      </div>
    );
  }
}
