import React from 'react';
import { shallow, mount } from 'enzyme';
import TradeItens from '../../../components/trade_itens';
import * as api from '../../../model/survivor';
import faker from 'faker';

describe('<TradeItens />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<TradeItens props={{}} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('When data is valid', () => {
    it('Send data to the api', () => {
      const props = {
        firstSurvivorId: faker.random.uuid(),
        secondSurvivorName: faker.name.firstName(),
        firstInventory: [{
          quantity: faker.random.number(90),
          item: {
            name: 'Fiji Water'
          }
        }],
        secondInventory: [{
          quantity: faker.random.number(90),
          item: {
            name: 'First Aid Pouch'
          }
        }]
      }
      const items = {
        pick: {
          fijiWater: 1,
          campbellSoup: 0,
          firstAidPouch: 0,
          ak47: 0
        },
        payment: {
          fijiWater: 0,
          campbellSoup: 0,
          firstAidPouch: 1,
          ak47: 0
        }
      }

      jest.spyOn(api, 'postTrade');

      const wrapper = mount(<TradeItens
        firstInventory={props.firstInventory}
        secondInventory={props.secondInventory}
        firstSurvivorId={props.firstSurvivorId}
        secondSurvivorName={props.secondSurvivorName}
      />);

      wrapper.find('input[name="fijiWater"]').simulate('change', {
        target: { value: items.pick.fijiWater, name: 'fijiWater' }
      });

      wrapper.find('input[name="firstAidPouch"]').simulate('change', {
        target: { value: items.payment.firstAidPouch, name: 'firstAidPouch' }
      });

      wrapper.find('form').simulate('submit');

      expect(api.postTrade).toHaveBeenCalledWith(
        props.firstSurvivorId,
        props.secondSurvivorName,
        items
      );
    });
  });
});
