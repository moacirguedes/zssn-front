import React from 'react';
import { shallow } from 'enzyme';
import Row from '../../../components/row';
import faker from 'faker';

describe('<Row />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Row survivor={{}}/>)

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with survivors attributes', () => {
    const props = {
      name: faker.name.findName(),
      age: faker.random.number(70).toString(),
      gender: Math.random() > 0.5 ? 'F' : 'M',
      lonlat: '',
      infected: "False"
    }
    
    const wrapper = shallow(<Row survivor={props}/>);
    const tdsText = wrapper.find('td').map(td => td.text());

    expect(tdsText[0]).toBe(props.name);
    expect(tdsText[1]).toBe(props.age);
    expect(tdsText[2]).toBe(props.gender);
    expect(tdsText[3]).toBe(props.lonlat);
    expect(tdsText[4]).toBe(props.infected);
  });
});
