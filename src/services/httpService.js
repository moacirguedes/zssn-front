import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://zssn-backend-example.herokuapp.com/api/'
});

export const StatusCode = {
  OK_STATUS: 200,
  CREATED_STATUS: 201,
  NO_CONTENT: 204,
  NOT_FOUND_STATUS: 404,
  UNPROCESSABLE_ENTITY: 422
}
