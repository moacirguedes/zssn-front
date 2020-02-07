import faker from 'faker';
import { StatusCode } from '../../services/httpService';

export const getSurvivorsFactory = () => ({
  data: [{
    ...survivor()
  }],
  status: StatusCode.OK_STATUS
});

export const survivor = props => ({
  location: '/' + faker.random.word(),
  name: faker.name.findName(),
  age: faker.random.number(70).toString(),
  gender: Math.random() > 0.5 ? 'F' : 'M',
  lonlat: '',
  infected: Math.random() > 0.5 ? true : false
});

export const inventory = props => ({
  water: faker.random.number({ min: 0, max: 10 }),
  food: faker.random.number({ min: 0, max: 10 }),
  medication: faker.random.number({ min: 0, max: 10 }),
  ammunition: faker.random.number({ min: 0, max: 10 }),
  ...props
});
