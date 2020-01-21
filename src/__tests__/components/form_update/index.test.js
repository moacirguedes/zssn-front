import React from 'react';
import { shallow } from 'enzyme';
import FormUpdate from '../../../components/form_update';

describe('<FormUpdate />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<FormUpdate props={{}}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
