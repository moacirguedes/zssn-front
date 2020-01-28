import React from 'react';
import { shallow } from 'enzyme';
import Reports from '../../../pages/reports';

describe('<Reports />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Reports />);

    expect(wrapper).toMatchSnapshot();
  });
});
