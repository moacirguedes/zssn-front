import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../../components/form';

describe('<Form />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Form props={{}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
