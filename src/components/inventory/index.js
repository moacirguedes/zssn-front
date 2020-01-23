import React from 'react';
import './styles.css';

const Inventory = ({ inventory }) =>

  inventory.map(item =>
    <label key={item.location}>{item.item.name}: {item.quantity}</label>
  )

export default Inventory;
