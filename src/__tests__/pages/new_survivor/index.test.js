import React from 'react';
import { shallow, mount } from 'enzyme';
import NewSurvivor from '../../../pages/new_survivor';

describe('<NewSurvivor />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NewSurvivor />);

    expect(wrapper).toMatchSnapshot();
  });
});
