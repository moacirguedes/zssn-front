import React from 'react';
import './styles.css';
import { postSurvivor } from '../../model/survivor';

const NewSurvivor = () => {
  const [state, setState] = React.useState({
    name: '',
    age: '',
    gender: '',
    lonlat: '',
    water: '',
    food: '',
    medication: '',
    ammunition: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await postSurvivor(state);
  }

  return (
    <div className="NewSurvivorDiv">
      <div className="Box">
        <form
          className="Form"
          onSubmit={event => handleSubmit(event)}
        >
          <input
            placeholder="Name"
            required
            name="name"
            value={state.name}
            onChange={handleChange}
          />

          <div className="LineInputs">
            <input
              className="Input__Small"
              placeholder="Age"
              type="number"
              min="2"
              max="100"
              required
              value={state.age}
              onChange={handleChange}
              name="age"
            />

            <select
              className="Input__Small"
              value={state.gender}
              onChange={handleChange}
              name="gender"
            >
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>

            <input
              placeholder="Location"
              value={state.lonlat}
              onChange={handleChange}
              name="lonlat"
              className="Input__Medium"
            />
          </div>

          <div className="LineInputs">
            <input
              className="Input__Small"
              placeholder="Water"
              type="number"
              min="0"
              required
              value={state.water}
              onChange={handleChange}
              name="water"
            />

            <input
              className="Input__Small"
              placeholder="Food"
              type="number"
              min="0"
              required
              value={state.food}
              onChange={handleChange}
              name="food"
            />

            <input
              className="Input__Small"
              placeholder="Medication"
              type="number"
              min="0"
              required
              value={state.medication}
              onChange={handleChange}
              name="medication"
            />

            <input
              className="Input__Small"
              placeholder="Ammunition"
              type="number"
              min="0"
              required
              value={state.ammunition}
              onChange={handleChange}
              name="ammunition"
            />
          </div>

          <button>Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewSurvivor;
