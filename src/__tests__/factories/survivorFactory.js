import faker from 'faker';
import { StatusCode } from '../../services/httpService';

export const getSurvivorsFactory = (props) => ({
  data: [{
    ...survivor(props)
  }],
  status: StatusCode.OK_STATUS
});

export const getSurvivorFactory = (props) => ({
  data: {
    ...survivor(props)
  },
  status: StatusCode.OK_STATUS
});

export const getInventoryFactory = (props) => ({
  data: {
    ...inventory(props)
  },
  status: StatusCode.OK_STATUS
});

const survivor = props => ({
  location: '/' + faker.random.word(),
  name: faker.name.findName(),
  age: faker.random.number(70).toString(),
  gender: Math.random() > 0.5 ? 'F' : 'M',
  lonlat: `POINT (${faker.address.latitude} ${faker.address.longitude})`,
  infected: Math.random() > 0.5 ? true : false,
  ...props
});

const inventory = props => ({
  fijiWater: faker.random.number({ min: 0, max: 10 }),
  campbellSoup: faker.random.number({ min: 0, max: 10 }),
  firstAidPouch: faker.random.number({ min: 0, max: 10 }),
  ak47: faker.random.number({ min: 0, max: 10 }),
  ...props
});
