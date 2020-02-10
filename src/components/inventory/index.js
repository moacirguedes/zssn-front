import React from 'react';
import './styles.css';

const Inventory = ({ inventory, showInput, handleChange, keys }) => {
  const Items = {
    'Fiji Water': 'fijiWater',
    'Campbell Soup': 'campbellSoup',
    'First Aid Pouch': 'firstAidPouch',
    'AK47': 'ak47'
  }

  return (
    inventory.map(item =>
      <div className="InventoryDiv" key={item.location}>
        <label
          htmlFor={item.location}
          data-testid={item.item.name}
        >
          {item.item.name}: {item.quantity}
        </label>
        {showInput &&
          <input
            data-testid={item.location}
            id={item.location}
            type="number"
            max={item.quantity}
            min={0}
            required
            value={keys[Items[item.item.name]]}
            onChange={handleChange}
            name={Items[item.item.name]}
          />
        }
      </div>
    )
  );
}

export default Inventory;
