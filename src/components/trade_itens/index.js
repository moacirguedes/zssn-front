import React from 'react';
import './styles.css';
import Inventory from '../inventory';

const TradeItens = ({ firstInventory, secondInventory }) =>

  <div className="TradeItensWrapper">
    <div className="TradeItens">
      <h4>First Survivor</h4>
      <Inventory inventory={firstInventory} />
    </div>

    <div className="TradeItens">
      <h4>Second Survivor</h4>
      <Inventory inventory={secondInventory} />
    </div>
  </div>

export default TradeItens;
