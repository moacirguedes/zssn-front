import React from 'react';
import './styles.css';

const FormUpdate = (props) =>

  <form className="Form" onSubmit={props.handleSubmit}>
    <label className="UpdateLabel">Name</label>
    <input
      type="text"
      value={props.name}
      name="name"
      onChange={props.handleChange}
    />

    <div className="UpdateInline">
      <div className="UpdateLabelInput">
        <label className="UpdateLabel">Age</label>
        <input
          className="UpdateInput"
          type="number"
          min="2"
          max="100"
          required
          value={props.age}
          onChange={props.handleChange}
          name="age"
        />
      </div>

      <div className="UpdateLabelInput">
        <label className="UpdateLabel">Gender</label>
        <select
          className="UpdateInput"
          value={props.gender}
          onChange={props.handleChange}
          name="gender"
        >
          <option value="F">Female</option>
          <option value="M">Male</option>
        </select>
      </div>
    </div>

    <label className="UpdateLabel">Location</label>
    <input
      placeholder="POINT (-1.0 1.0)"
      name="lonlat"
      value={props.lonlat}
      onChange={props.handleChange}
    />

    <button>Update</button>
  </form>

export default FormUpdate;
