import React from 'react';
import './styles.css';
import Inventory from '../inventory';
import { postTrade } from '../../model/survivor';
import { StatusCode } from '../../services/httpService';

const TradeItens = (props) => {
  const [state, setState] = React.useState({
    pick: {
      fijiWater: 0,
      campbellSoup: 0,
      firstAidPouch: 0,
      ak47: 0
    },
    payment: {
      fijiWater: 0,
      campbellSoup: 0,
      firstAidPouch: 0,
      ak47: 0
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await postTrade(props.firstSurvivorId, props.secondSurvivorName, state);

    if (response.status === StatusCode.NO_CONTENT) {
      props.reloadInventories();
      alert('Itens traded');
    }
    else {
      alert(JSON.stringify(
        response.data
      ));
    }
  }

  const handleChange = (event, type) => {
    const { value, name } = event.target;

    setState({
      ...state,
      [type]: {
        ...state[type],
        [name]: value
      }
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
            handleChange={event => handleChange(event, 'pick')}
            keys={state.pick}
          />
        </div>

        <div className="TradeItens">
          <h4>Consumer Payment</h4>
          <Inventory
            inventory={props.secondInventory}
            showInput="true"
            handleChange={event => handleChange(event, 'payment')}
            keys={state.payment}
          />
        </div>
      </div>
      <button className="ButtonTrade">Trade</button>
    </form>
  );
}

export default TradeItens;
