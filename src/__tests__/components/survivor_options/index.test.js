import React from 'react';
import { shallow } from 'enzyme';
import SurvivorOptions from '../../../components/survivor_options';

describe('<SurvivorOptions />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SurvivorOptions survivors={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
