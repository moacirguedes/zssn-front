import React from 'react';
import { shallow, mount } from 'enzyme';
import UpdateProfile from '../../../pages/update_profile';
import faker from 'faker';
import sinon from 'sinon';

describe('<UpdateProfile />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<UpdateProfile />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('should call api', () => {
    it('load survivor profile', () => {
      const loadSurvivorMock = jest.spyOn(UpdateProfile.prototype, 'loadSurvivor');
      shallow(<UpdateProfile />);

      expect(loadSurvivorMock).toHaveBeenCalled();
    });
  });
});
