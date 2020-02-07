import React from 'react';
import './style.css';

const Form = (props) => 
  <form
    className="NewSurvivorForm"
    onSubmit={props.handleSubmit}
  >
    <input
      placeholder="Name"
      required
      name="name"
      value={props.name}
      onChange={props.handleChange}
    />

    <div className="LineInputs">
      <input
        className="Input__Small"
        placeholder="Age"
        type="number"
        min="2"
        max="100"
        required
        value={props.age}
        onChange={props.handleChange}
        name="age"
      />

      <select
        className="Input__Small"
        value={props.gender}
        onChange={props.handleChange}
        name="gender"
      >
        <option value="F">Female</option>
        <option value="M">Male</option>
      </select>

      <input
        placeholder="Location"
        value={props.lonlat}
        onChange={props.handleChange}
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
        value={props.water}
        onChange={props.handleChange}
        name="water"
      />

      <input
        className="Input__Small"
        placeholder="Food"
        type="number"
        min="0"
        required
        value={props.food}
        onChange={props.handleChange}
        name="food"
      />

      <input
        className="Input__Small"
        placeholder="Medication"
        type="number"
        min="0"
        required
        value={props.medication}
        onChange={props.handleChange}
        name="medication"
      />

      <input
        className="Input__Small"
        placeholder="Ammunition"
        type="number"
        min="0"
        required
        value={props.ammunition}
        onChange={props.handleChange}
        name="ammunition"
      />
    </div>

    <button>Create</button>
  </form>

export default Form;
