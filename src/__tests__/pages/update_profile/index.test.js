import React from 'react';
import { shallow, mount } from 'enzyme';
import UpdateProfile from '../../../pages/update_profile';
import faker from 'faker';
import * as api from '../../../model/survivor';

describe('<UpdateProfile />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<UpdateProfile />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('when component load', () => {
    describe('should call api', () => {
      it('load survivor profile', () => {
        const loadSurvivorMock = jest.spyOn(UpdateProfile.prototype, 'loadSurvivor');
        shallow(<UpdateProfile />);

        expect(loadSurvivorMock).toHaveBeenCalled();
      });
    });
  });

  describe('When data is valid', () => {
    it('Send data to the api', () => {
      const survivor = {
        name: faker.name.findName(),
        age: faker.random.number({ min: 2, max: 99 }),
        gender: Math.random() > 0.5 ? 'F' : 'M',
        lonlat: ''
      }

      jest.spyOn(api, 'updateSurvivor');

      const wrapper = mount(<UpdateProfile
        match={{ params: { id: 1 } }}
      />);

      wrapper.setState({
        name: survivor.name,
        age: survivor.age,
        gender: survivor.gender,
        lonlat: survivor.lonlat
      })

      wrapper.find('form').simulate('submit');

      expect(api.updateSurvivor).toHaveBeenCalledWith(1, survivor);
    });
  });
});
