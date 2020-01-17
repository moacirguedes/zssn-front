import React from 'react';
import './styles.css';
import { postSurvivor } from '../../model/survivor';
import Form from '../../components/form';

const NewSurvivor = () => {
  const [state, setState] = React.useState({
    name: '',
    age: '',
    gender: 'F',
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

  const handleSubmit = async event => {
    event.preventDefault();

    await postSurvivor(state);

    alert('Survivor created');
  }

  return (
    <div className="NewSurvivorDiv">
      <div className="Box">
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          name={state.name}
          age={state.age}
          gender={state.gender}
          lonlat={state.lonlat}
          water={state.water}
          food={state.food}
          ammunition={state.ammunition}
          medication={state.medication}
        />
      </div>
    </div>
  );
}

export default NewSurvivor;
