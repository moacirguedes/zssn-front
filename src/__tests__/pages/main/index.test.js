import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../../pages/main';

describe('<Main/>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should load survivors', () => {
    const mockComponentDidMount = jest.spyOn(Main.prototype, 'componentDidMount');
    shallow(<Main />);

    expect(mockComponentDidMount).toHaveBeenCalled();
  });
});