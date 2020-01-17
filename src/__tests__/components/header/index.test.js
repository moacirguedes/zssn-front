import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/header';

describe('<Header />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show the title', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1').text()).toBe('Zombie Survival Social Network');
  });
});
