import React from 'react';
import { shallow } from 'enzyme';
import Inventory from '../../../components/inventory';
import faker from 'faker';

describe('<Inventory />', () => {
  function inventoryFactory(item) {
    const inventory = [
      {
        quantity: faker.random.number(90),
        item: {
          name: item
        }
      }
    ];

    return inventory;
  }

  it('should render correctly', () => {
    const wrapper = shallow(<Inventory inventory={[]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show the amount of fiji water', () => {
    const inventory = inventoryFactory('fiji water');
    const wrapper = shallow(<Inventory inventory={inventory}/>);

    const labelText = wrapper.find('label').text();

    expect(labelText).toBe(`${inventory[0].item.name}: ${inventory[0].quantity}`);
  });

  it('should show the amount of campell soup', () => {
    const inventory = inventoryFactory('campell soup');
    const wrapper = shallow(<Inventory inventory={inventory}/>);

    const labelText = wrapper.find('label').text();

    expect(labelText).toBe(`${inventory[0].item.name}: ${inventory[0].quantity}`);
  });

  it('should show the amount of first aid pouch', () => {
    const inventory = inventoryFactory('first aid pouch');
    const wrapper = shallow(<Inventory inventory={inventory}/>);

    const labelText = wrapper.find('label').text();

    expect(labelText).toBe(`${inventory[0].item.name}: ${inventory[0].quantity}`);
  });

  it('should show the amount of ak47', () => {
    const inventory = inventoryFactory('ak47');
    const wrapper = shallow(<Inventory inventory={inventory}/>);

    const labelText = wrapper.find('label').text();

    expect(labelText).toBe(`${inventory[0].item.name}: ${inventory[0].quantity}`);
  });
});
