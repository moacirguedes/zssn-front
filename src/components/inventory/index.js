import React from 'react';
import './styles.css';

const Inventory = ({ inventory }, input) =>

  inventory.map(item =>
    <>
      <label
        key={item.location}
        for={item.location}
      >
        {item.item.name}: {item.quantity}
      </label>
      <input
        id={item.location}
        type="number"
        max={item.quantity}
        min={0}
        required
      />
    </>
  )

export default Inventory;
