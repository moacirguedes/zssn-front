import React, { Component } from 'react';
import './styles.css';
import { getSurvivor, updateSurvivor } from '../../model/survivor';
import FormUpdate from '../../components/form_update';

export default class UpdateProfile extends Component {
  state = {
    survivor: ''
  }

  componentDidMount() {
    this.loadSurvivor();
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => {
      let survivor = prevState.survivor;
      survivor[name] = value;
      return { survivor };
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
        survivor: response.data
      });
    }
    else {
      this.props.history.goBack();
    }
  }

  render() {
    const { survivor } = this.state;

    return (
      <div className="UpdateProfileDiv">
        <div className="UpdateProfileBox">
          <FormUpdate
            survivor={survivor}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
