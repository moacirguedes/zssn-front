import React from 'react';
import { shallow, mount } from 'enzyme';
import Trade from '../../../pages/trade';

describe('<Trade />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Trade />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('on component load', () => {
    it('should call the api', () => {
      const spyLoadSurvivors = jest.spyOn(Trade.prototype, 'loadSurvivors');
      shallow(<Trade />);

      expect(spyLoadSurvivors).toHaveBeenCalled();
    });
  });

  describe('on first input change', () => {
    it('should load inventory of the first survivor', () => {
      const spyLoadInventory = jest.spyOn(Trade.prototype, 'loadFirstInventory');
      const wrapper = mount(<Trade />);

      wrapper.find('[name="firstSurvivor"]').simulate('change', {
        target: { name: 'firstSurvivor'}
      });

      expect(spyLoadInventory).toHaveBeenCalled();
    });
  });

  describe('on second input change', () => {
    it('should load inventory of the second survivor', () => {
      const spyLoadInventory = jest.spyOn(Trade.prototype, 'loadSecondInventory');
      const wrapper = mount(<Trade />);

      wrapper.find('[name="secondSurvivor"]').last().simulate('change', {
        target: { name: 'secondSurvivor'}
      });

      expect(spyLoadInventory).toHaveBeenCalled();
    });
  });
});
