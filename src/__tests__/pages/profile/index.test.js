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
    infected: Math.random() > 0.5 ? true : false,
    ...props
  });

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

    expect(wrapper.find('[data-id="name"]').text()).toBe(survivor.name);
  });

  it('should show the age', () => {
    const survivor = survivorFactory();
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      survivor: survivor
    });

    expect(wrapper.find('[data-id="age"]').text()).toContain(survivor.age);
  });

  it('should show the gender', () => {
    const survivor = survivorFactory();
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      survivor: survivor
    });

    expect(wrapper.find('[data-id="gender"]').text()).toContain(survivor.gender);
  });

  it('should show the location', () => {
    const survivor = survivorFactory();
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      survivor: survivor
    });

    expect(wrapper.find('[data-id="lonlat"]').text()).toContain(survivor.lonlat);
  });

  it('should show infection status', () => {
    const survivor = survivorFactory();
    const wrapper = shallow(<Profile />);

    wrapper.setState({
      survivor: survivor
    });

    expect(wrapper.find('[data-id="infected"]').text()).toContain(survivor.lonlat);
  });
});
