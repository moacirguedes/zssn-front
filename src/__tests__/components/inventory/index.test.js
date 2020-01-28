import React from 'react';
import { shallow } from 'enzyme';
import Inventory from '../../../components/inventory';

describe('<Inventory />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Inventory inventory={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
