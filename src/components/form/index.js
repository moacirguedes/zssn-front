import React from 'react';
import './style.css';

const Form = (props) =>
  <form
    className="Form"
    onSubmit={props.handleSubmit}
  >
    <label className="CreateLabel">Name</label>
    <input
      required
      name="name"
      value={props.name}
      onChange={props.handleChange}
    />

    <div className="Inline">
      <div class="LabelInputDiv">
        <label className="CreateLabel">Age</label>

        <input
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

      <div class="LabelInputDiv">
        <label className="CreateLabel">Gender</label>

        <select
          className="CreateSurvivorInput"
          value={props.gender}
          onChange={props.handleChange}
          name="gender"
        >
          <option value="F">Female</option>
          <option value="M">Male</option>
        </select>
      </div>

      <div class="LabelInputDiv">
        <label className="CreateLabel">Location</label>

        <input
          value={props.lonlat}
          onChange={props.handleChange}
          name="lonlat"
          className="CreateSurvivorInput"
        />
      </div>
    </div>

    <div className="Inline height140">
      <div className="ItensDiv">
        <label className="CreateLabel">Water</label>
        <br />

        <input
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.water}
          onChange={props.handleChange}
          name="water"
        />

        <label className="CreateLabel">Food</label>
        <br />

        <input
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
        <label className="CreateLabel">Medication</label>
        <br />

        <input
          className="CreateItemInput"
          type="number"
          min="0"
          required
          value={props.medication}
          onChange={props.handleChange}
          name="medication"
        />

        <label className="CreateLabel">Ammunition</label>
        <br />

        <input
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
