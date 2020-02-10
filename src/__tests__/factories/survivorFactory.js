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

export const getReportFactory = (report) => ({
  data: {
    report: {
      description: faker.random.word(),
      [report]: faker.random.number()
    }
  },
  status: StatusCode.OK_STATUS
});

export const inventoryFactory = (item) => [{
  location: faker.random.uuid(),
  quantity: faker.random.number(90),
  item: {
    name: item
  }
}];

const survivor = props => ({
  location: '/' + faker.random.uuid(),
  name: faker.name.findName(),
  age: faker.random.number(70).toString(),
  gender: Math.random() > 0.5 ? 'F' : 'M',
  lonlat: `POINT (${faker.address.latitude} ${faker.address.longitude})`,
  infected: Math.random() > 0.5 ? true : false,
  ...props
});
