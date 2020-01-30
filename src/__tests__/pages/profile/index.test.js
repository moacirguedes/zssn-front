import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../../pages/profile';
import faker from 'faker';

describe('<Profile />', () => {
  const survivorFactory = props => ({
    location: faker.random.word(),
    name: faker.name.findName(),
    age: faker.random.number(70).toString(),
    gender: Math.random() > 0.5 ? 'F' : 'M',
    lonlat: '',
    ...props
  });

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
    const wrapper = shallow(<Profile />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('call the api', () => {
    it('should load survivor profile', () => {
      const loadSurvivorMock = jest.spyOn(Profile.prototype, 'loadSurvivor');
      shallow(<Profile />);

      expect(loadSurvivorMock).toHaveBeenCalled();
    });

    it('should load survivor inventory', () => {
      const loadInventoryMock = jest.spyOn(Profile.prototype, 'loadInventory');
      shallow(<Profile />);

      expect(loadInventoryMock).toHaveBeenCalled();
    });
  });

  it('should show the name', () => {
    const survivor = survivorFactory();
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      survivor: survivor
    });

    expect(wrapper.find('h2').text()).toBe(survivor.name);
  });

  it('should show the age', () => {
    const survivor = survivorFactory();
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      survivor: survivor
    });

    expect(wrapper.find('label').at(0).text()).toContain(survivor.age);
  });

  it('should show the gender', () => {
    const survivor = survivorFactory();
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      survivor: survivor
    });

    expect(wrapper.find('label').at(1).text()).toContain(survivor.gender);
  });

  it('should show the location', () => {
    const survivor = survivorFactory();
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      survivor: survivor
    });

    expect(wrapper.find('label').at(2).text()).toContain(survivor.lonlat);
  });

  it('should show the amount of water', () => {
    const inventory = inventoryFactory('water');
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      inventory: inventory
    });

    const labelText = wrapper.find('label').at(3).text();

    expect(labelText).toBe(`${inventory[0].item.name}: ${inventory[0].quantity}`);
  });

  it('should show the amount of food', () => {
    const inventory = inventoryFactory('food');
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      inventory: inventory
    });

    const labelText = wrapper.find('label').at(3).text();

    expect(labelText).toBe(`${inventory[0].item.name}: ${inventory[0].quantity}`);
  });

  it('should show the amount of medication', () => {
    const inventory = inventoryFactory('medication');
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      inventory: inventory
    });

    const labelText = wrapper.find('label').at(3).text();

    expect(labelText).toBe(`${inventory[0].item.name}: ${inventory[0].quantity}`);
  });

  it('should show the amount of ammunition', () => {
    const inventory = inventoryFactory('ammunition');
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      inventory: inventory
    });

    const labelText = wrapper.find('label').at(3).text();

    expect(labelText).toBe(`${inventory[0].item.name}: ${inventory[0].quantity}`);
  });
});
