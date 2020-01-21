import React from 'react';
import './styles.css';

const FormUpdate = (props) =>

  <form className="UpdateProfileForm" onSubmit={props.handleSubmit}>
    <input
      placeholder="Name"
      type="text"
      value={props.survivor.name}
      name="name"
      onChange={props.handleChange}
    />

    <div className="LineInputs">
      <input
        className="UpdateInput__Small"
        placeholder="Age"
        type="number"
        min="2"
        max="100"
        required
        value={props.survivor.age}
        onChange={props.handleChange}
        name="age"
      />

      <select
        className="UpdateInput__Small"
        value={props.survivor.gender}
        onChange={props.handleChange}
        name="gender"
      >
        <option value="F">Female</option>
        <option value="M">Male</option>
      </select>
    </div>

    <input
      placeholder="Location (Example: POINT (-1.0 1.0) )"
      name="lonlat"
      value={props.survivor.lonlat}
      onChange={props.handleChange}
    />

    <button>Update</button>
  </form>

export default FormUpdate;
