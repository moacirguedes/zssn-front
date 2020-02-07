import React from 'react';
import { shallow, mount } from 'enzyme';
import NewSurvivor from '../../../pages/new_survivor';
import * as api from '../../../model/survivor';
import faker from 'faker';

describe('<NewSurvivor />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NewSurvivor />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('When data is valid', () => {
    it('Send data to the api', () => {
      const survivor = {
        name: faker.name.findName(),
        age: faker.random.number({ min: 2, max: 99 }),
        gender: Math.random() > 0.5 ? 'F' : 'M',
        lonlat: '',
        water: faker.random.number({ min: 0, max: 10 }),
        food: faker.random.number({ min: 0, max: 10 }),
        medication: faker.random.number({ min: 0, max: 10 }),
        ammunition: faker.random.number({ min: 0, max: 10 })
      }

      jest.spyOn(api, 'postSurvivor');

      const wrapper = mount(<NewSurvivor />);

      wrapper.find('input[name="name"]').simulate('change', {
        target: {value: survivor.name, name: 'name'}
      });

      wrapper.find('input[name="age"]').simulate('change', {
        target: {value: survivor.age, name: 'age'}
      });

      wrapper.find('select[name="gender"]').simulate('change', {
        target: {value: survivor.gender, name: 'gender'}
      });

      wrapper.find('input[name="water"]').simulate('change', {
        target: {value: survivor.water, name: 'water'}
      });

      wrapper.find('input[name="food"]').simulate('change', {
        target: {value: survivor.food, name: 'food'}
      });

      wrapper.find('input[name="medication"]').simulate('change', {
        target: {value: survivor.medication, name: 'medication'}
      });

      wrapper.find('input[name="ammunition"]').simulate('change', {
        target: {value: survivor.ammunition, name: 'ammunition'}
      });

      wrapper.find('form').simulate('submit');

      expect(api.postSurvivor).toHaveBeenCalledWith(survivor);
    });
  });
});
