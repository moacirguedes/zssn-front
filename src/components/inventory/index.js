import React from 'react';
import './styles.css';

const Inventory = ({ inventory, showInput, handleChange, survivor }) =>

  inventory.map(item =>
    <React.Fragment key={item.location}>
      <label
        for={item.location}
      >
        {item.item.name}: {item.quantity}
      </label>
      {showInput === 'true' &&
        <input
          id={item.location}
          type="number"
          max={item.quantity}
          min={0}
          required
          onChange={handleChange}
          name={survivor + item.item.name}
        />
      }
    </React.Fragment>
  );

export default Inventory;
