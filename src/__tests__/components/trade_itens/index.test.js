import React from 'react';
import { shallow } from 'enzyme';
import TradeItens from '../../../components/trade_itens';

describe('<TradeItens />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<TradeItens props={{}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
