import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../../components/table';

describe('<Table />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Table survivors={[]}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
