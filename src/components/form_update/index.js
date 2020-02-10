import React from 'react';
import './styles.css';

const FormUpdate = (props) =>

  <form
    className="Form"
    onSubmit={props.handleSubmit}
    data-testid="update-survivor-form"
  >
    <label htmlFor="name" className="UpdateLabel">Name</label>
    <input
      id="name"
      type="text"
      value={props.name}
      name="name"
      onChange={props.handleChange}
    />

    <div className="UpdateInline">
      <div className="UpdateLabelInput">
        <label htmlFor="age" className="UpdateLabel">Age</label>
        <input
          id="age"
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
        <label htmlFor="gender" className="UpdateLabel">Gender</label>
        <select
          id="gender"
          className="UpdateInput"
          value={props.gender}
          onChange={props.handleChange}
          name="gender"
        >
          <option disabled></option>
          <option value="F">Female</option>
          <option value="M">Male</option>
        </select>
      </div>
    </div>

    <label htmlFor="lonlat" className="UpdateLabel">Location</label>
    <input
      id="lonlat"
      placeholder="POINT (-1.0 1.0)"
      name="lonlat"
      value={props.lonlat}
      onChange={props.handleChange}
    />

    <button>Update</button>
  </form>

export default FormUpdate;
