import React from 'react';
import './styles.css';

const Inventory = ({ inventory, showInput, handleChange, keys }) => {
  const handleItemName = (name) => {
    switch (name) {
      case 'Fiji Water':
        return 'fijiWater';
      case 'Campbell Soup':
        return 'campbellSoup';
      case 'First Aid Pouch':
        return 'firstAidPouch';
      case 'AK47':
        return 'ak47';
      default:
        break;
    }
  }

  return (
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
            value={keys[handleItemName(item.item.name)]}
            onChange={handleChange}
            name={handleItemName(item.item.name)}
          />
        }
      </React.Fragment>
    )
  );
}

export default Inventory;
