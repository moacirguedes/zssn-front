import React from 'react';
import './style.css';

const Form = (props) =>
  <form
    className="Form"
    onSubmit={props.handleSubmit}
  >
    <label for="name" className="CreateLabel">Name</label>
    <input
      id="name"
      required
      name="name"
      value={props.name}
      onChange={props.handleChange}
    />

    <div className="Inline">
      <div class="LabelInput">
        <label for="age" className="CreateLabel">Age</label>

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

      <div class="LabelInput">
        <label for="gender" className="CreateLabel">Gender</label>

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

      <div class="LabelInput">
        <label for="lonlat" className="CreateLabel">Location</label>

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
        <label for="water" className="CreateLabel">Fiji Water</label>

        <input
          id="water"
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.water}
          onChange={props.handleChange}
          name="water"
        />

        <label for="food" className="CreateLabel">Campbell Soup</label>

        <input
          id="food"
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.food}
          onChange={props.handleChange}
          name="food"
        />
      </div>

      <div className="ItensDiv">
        <label for="medication" className="CreateLabel">First Aid Pouch</label>

        <input
          id="medication"
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.medication}
          onChange={props.handleChange}
          name="medication"
        />

        <label for="ammunition" className="CreateLabel">AK47</label>
  
        <input
          id="ammunition"
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.ammunition}
          onChange={props.handleChange}
          name="ammunition"
        />
      </div>
    </div>

    <button>Create</button>
  </form>

export default Form;
