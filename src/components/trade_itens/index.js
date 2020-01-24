import React from 'react';
import './styles.css';
import Inventory from '../inventory';
import { postTrade } from '../../model/survivor';
import { StatusCode } from '../../services/httpService';

const TradeItens = (props, { reloadInventories }) => {
  const [state, setState] = React.useState({
    firstWater: 0,
    firstFood: 0,
    firstMedication: 0,
    firstAmmunition: 0,
    secondWater: 0,
    secondFood: 0,
    secondMedication: 0,
    secondAmmunition: 0
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await postTrade(props.firstSurvivorId, props.secondSurvivorName, state);

    if (response.status === StatusCode.NO_CONTENT) {
      reloadInventories();
      alert('Itens traded');
    }
    else {
      alert('Failed to trade');
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target;

    setState({
      ...state,
      [name]: value
    });
  }

  return (
    <form className="TradeItensWrapper" onSubmit={handleSubmit}>
      <div className="TradeColumns">
        <div className="TradeItens">
          <h4>Consumer Pick</h4>
          <Inventory
            inventory={props.firstInventory}
            showInput="true"
            handleChange={handleChange}
            survivor="first"
          />
        </div>

        <div className="TradeItens">
          <h4>Consumer Payment</h4>
          <Inventory
            inventory={props.secondInventory}
            showInput="true"
            handleChange={handleChange}
            survivor="second"
          />
        </div>
      </div>
      <button className="ButtonTrade">Trade</button>
    </form>
  );
}

export default TradeItens;
