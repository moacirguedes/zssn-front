import React from 'react';
import { shallow, mount } from 'enzyme';
import ReportInfected from '../../../pages/report_infected';
import faker from 'faker';
import * as api from '../../../model/survivor';

describe('<ReportInfected />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ReportInfected />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('when select two survivors', () => {
    it('send report', () => {
      const survivors = [
        {
          infected: false,
          location: faker.random.uuid(),
          name: faker.name.firstName()
        },
        {
          infected: false,
          location: faker.random.uuid(),
          name: faker.name.firstName()
        }
      ]

      jest.spyOn(api, 'reportInfected');

      const wrapper = mount(<ReportInfected />);

      wrapper.setState({
        survivors: survivors
      });

      wrapper.find('[name="reporter"]').simulate('change', {
        target: { value: survivors[0].location, name: 'reporter' }
      });

      wrapper.find('[name="infected"]').simulate('change', {
        target: { value: survivors[1].location, name: 'infected' }
      });

      wrapper.find('form').simulate('submit');

      expect(api.reportInfected).toHaveBeenCalledWith(survivors[0].location, survivors[1].location);
    });
  });
});
