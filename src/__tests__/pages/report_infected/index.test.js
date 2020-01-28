import React from 'react';
import { shallow } from 'enzyme';
import ReportInfected from '../../../pages/report_infected';

describe('<ReportInfected />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ReportInfected />);

    expect(wrapper).toMatchSnapshot();
  });
});
