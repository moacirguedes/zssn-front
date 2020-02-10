import React from 'react';
import './style.css';

const Form = (props) =>
  <form
    className="Form"
    onSubmit={props.handleSubmit}
  >
    <label htmlFor="name" className="CreateLabel">Name</label>
    <input
      id="name"
      required
      name="name"
      value={props.name}
      onChange={props.handleChange}
    />

    <div className="Inline">
      <div className="LabelInput">
        <label htmlFor="age" className="CreateLabel">Age</label>

        <input
          id="age"
          className="CreateSurvivorInput"
          type="number"
          min="2"
          max="100"
          required
          value={props.age}
          onChange={props.handleChange}
          name="age"
        />
      </div>

      <div className="LabelInput">
        <label htmlFor="gender" className="CreateLabel">Gender</label>

        <select
          id="gender"
          className="CreateSurvivorInput"
          value={props.gender}
          onChange={props.handleChange}
          name="gender"
          required
        >
          <option disabled></option>
          <option value="F">Female</option>
          <option value="M">Male</option>
        </select>
      </div>

      <div className="LabelInput">
        <label htmlFor="lonlat" className="CreateLabel">Location</label>

        <input
          id="lonlat"
          value={props.lonlat}
          onChange={props.handleChange}
          name="lonlat"
          className="CreateSurvivorInput"
        />
      </div>
    </div>

    <div className="Inline height140">
      <div className="ItensDiv">
        <label htmlFor="fijiWater" className="CreateLabel">Fiji Water</label>

        <input
          id="fijiWater"
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.fijiWater}
          onChange={props.handleChange}
          name="fijiWater"
        />

        <label htmlFor="campbellSoup" className="CreateLabel">Campbell Soup</label>

        <input
          id="campbellSoup"
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.campbellSoup}
          onChange={props.handleChange}
          name="campbellSoup"
        />
      </div>

      <div className="ItensDiv">
        <label htmlFor="firstAidPouch" className="CreateLabel">First Aid Pouch</label>

        <input
          id="firstAidPouch"
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.firstAidPouch}
          onChange={props.handleChange}
          name="firstAidPouch"
        />

        <label htmlFor="ak47" className="CreateLabel">AK47</label>
  
        <input
          id="ak47"
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.ak47}
          onChange={props.handleChange}
          name="ak47"
        />
      </div>
    </div>

    <button>Create</button>
  </form>

export default Form;
