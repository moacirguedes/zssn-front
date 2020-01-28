import React from 'react';
import { shallow } from 'enzyme';
import Reports from '../../../pages/reports';
import faker from 'faker';

describe('<Reports />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Reports />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('when component load', () => {
    it('should load infecteds report', () => {
      const spyloadReportInfecteds = jest.spyOn(Reports.prototype, 'loadReportInfecteds');
      shallow(<Reports />);

      expect(spyloadReportInfecteds).toHaveBeenCalled();
    });

    it('should load non infecteds report', () => {
      const spyloadReportNonInfecteds = jest.spyOn(Reports.prototype, 'loadReportNonInfecteds');
      shallow(<Reports />);

      expect(spyloadReportNonInfecteds).toHaveBeenCalled();
    });

    it('should load infected points report', () => {
      const spyloadReportInfectedPoints = jest.spyOn(Reports.prototype, 'loadReportInfectedPoints');
      shallow(<Reports />);

      expect(spyloadReportInfectedPoints).toHaveBeenCalled();
    });

    it('should load people inventory report', () => {
      const spyloadReportPeopleInventory = jest.spyOn(Reports.prototype, 'loadReportPeopleInventory');
      shallow(<Reports />);

      expect(spyloadReportPeopleInventory).toHaveBeenCalled();
    });
  });

  describe('after component load', () => {
    it('should show points lost', () => {
      const wrapper = shallow(<Reports />);
      
      const infectedPoints = {
        total_points_lost: faker.random.number()
      }

      wrapper.setState({
        infectedPoints: infectedPoints
      });

      const label = wrapper.find('label').at(0).text();

      expect(label).toContain(infectedPoints.total_points_lost);
    });

    it('should show average itens per person', () => {
      const wrapper = shallow(<Reports />);

      const peopleInventory = {
        average_items_quantity_per_person: faker.random.number()
      }

      wrapper.setState({
        peopleInventory: peopleInventory
      });

      const itensPerPerson = wrapper.find('label').at(1).text();

      expect(itensPerPerson).toContain(peopleInventory.average_items_quantity_per_person);
    });

    it('should show average itens per healthy person', () => {
      const wrapper = shallow(<Reports />);

      const peopleInventory = {
        average_items_quantity_per_healthy_person: faker.random.number()
      }

      wrapper.setState({
        peopleInventory: peopleInventory
      });

      const itensPerHealthyPerson = wrapper.find('label').at(2).text();

      expect(itensPerHealthyPerson).toContain(peopleInventory.average_items_quantity_per_healthy_person);
    });
  });
});
