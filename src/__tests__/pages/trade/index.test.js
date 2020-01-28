import React from 'react';
import { shallow } from 'enzyme';
import Trade from '../../../pages/trade';

describe('<Trade />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Trade />);

    expect(wrapper).toMatchSnapshot();
  });
});
