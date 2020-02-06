import React from 'react';
import './styles.css';
import { postSurvivor } from '../../model/survivor';
import Form from '../../components/form';
import { StatusCode } from '../../services/httpService';

const NewSurvivor = () => {
  const [state, setState] = React.useState({
    name: '',
    age: '',
    gender: '',
    lonlat: '',
    fijiWater: '',
    campbellSoup: '',
    firstAidPouch: '',
    ak47: ''
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

    const response = await postSurvivor(state);

    if (response.status === StatusCode.CREATED_STATUS) {
      alert('Survivor created');
    }
    else {
      alert(JSON.stringify(response.data));
    }
  }

  return (
    <div className="NewSurvivorWrapper">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        name={state.name}
        age={state.age}
        gender={state.gender}
        lonlat={state.lonlat}
        fijiWater={state.fijiWater}
        campbellSoup={state.campbellSoup}
        ak47={state.ak47}
        firstAidPouch={state.firstAidPouch}
      />
    </div>
  );
}

export default NewSurvivor;
