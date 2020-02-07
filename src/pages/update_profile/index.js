import React, { Component } from 'react';
import './styles.css';
import { getSurvivor, updateSurvivor } from '../../model/survivor';
import FormUpdate from '../../components/form_update';

export default class UpdateProfile extends Component {
  state = {
    name: '',
    gender: '',
    age: '',
    lonlat: ''
  }

  componentDidMount() {
    this.loadSurvivor();
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { id } = this.props.match.params;
    const { survivor } = this.state;
    const response = await updateSurvivor(id, survivor);

    if (response.status === 200) { 
      alert('Profile updated');
      this.props.history.goBack();
    }
  }

  async loadSurvivor() {
    const { id } = this.props.match.params;

    const response = await getSurvivor(id);

    if (response.status === 200) {
      this.setState({
        name: response.data.name,
        age: response.data.age,
        gender: response.data.gender,
        lonlat: response.data.lonlat
      });
    }
    else {
      this.props.history.goBack();
    }
  }

  render() {
    const { name, gender, age, lonlat } = this.state;

    return (
      <div className="UpdateProfileDiv">
        <div className="UpdateProfileBox">
          <FormUpdate
            name={name}
            age={age}
            gender={gender}
            lonlat={lonlat}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
