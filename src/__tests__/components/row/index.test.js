import React from 'react';
import { shallow } from 'enzyme';
import Row from '../../../components/row';
import faker from 'faker';

describe('<Row />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Row survivor={{}} />)

    expect(wrapper).toMatchSnapshot();
  });

  describe('render with correct values', () => {
    let props;
    
    beforeEach(() => {
      props = {
        name: faker.name.findName(),
        age: faker.random.number(70).toString(),
        gender: Math.random() > 0.5 ? 'F' : 'M',
        lonlat: '',
        infected: "False"
      }
    });

    it('should show name value', () => {
      const wrapper = shallow(<Row survivor={props} />);
      const tdText = wrapper.find('td').at(0).text();
      
      expect(tdText).toBe(props.name);
    });

    it('should show age value', () => {
      const wrapper = shallow(<Row survivor={props} />);
      const tdText = wrapper.find('td').at(1).text();
      
      expect(tdText).toBe(props.age);
    });

    it('should show gender value', () => {
      const wrapper = shallow(<Row survivor={props} />);
      const tdText = wrapper.find('td').at(2).text();
      
      expect(tdText).toBe(props.gender);
    });

    it('should show age value', () => {
      const wrapper = shallow(<Row survivor={props} />);
      const tdText = wrapper.find('td').at(3).text();
      
      expect(tdText).toBe(props.lonlat);
    });

    it('should show infected value', () => {
      const wrapper = shallow(<Row survivor={props} />);
      const tdText = wrapper.find('td').at(4).text();
      
      expect(tdText).toBe(props.infected);
    });
  });
});
