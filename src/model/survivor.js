import { api } from '../services/httpService';

export const getSurvivors = async () => {
  try {
    const { data } = await api.get('people');
    return data;
  }
  catch (error) {
    console.error(error.response);
    alert('Failed to load survivors');
    return error.response;
  }
}

export const getSurvivor = async (id) => {
  try {
    return await api.get(`people/${id}`);
  }
  catch (error) {
    console.error(error.response);
    alert('Survivor not found');
    return error.response;
  }
}

export const getInventory = async (id) => {
  try {
    return await api.get(`people/${id}/properties`);
  }
  catch (error) {
    console.error(error.response);
    return error.response;
  }
}

export const postSurvivor = async (survivor) => {
  try {
    const params = JSON.stringify({
      name: survivor.name,
      age: survivor.age,
      gender: survivor.gender,
      lonlat: survivor.lonlat,
      items: `water:${survivor.water},food:${survivor.food},medication:${survivor.medication},ammunition:${survivor.ammunition}`
    });

    return await api.post('people', params, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  catch (error) {
    console.error(error.response);
    alert(JSON.stringify(error.response.data));
    return error.response;
  }
}

export const updateSurvivor = async (id, survivor) => {
  try {
    const params = JSON.stringify({
      name: survivor.name,
      age: survivor.age,
      gender: survivor.gender,
      lonlat: survivor.lonlat
    });

    return await api.patch(`people/${id}`, params, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  catch (error) {
    console.error(error.response);
    alert('something went wrong, try again');
    return error.response;
  }
}

export const reportInfected = async (id, infectedId) => {
  try {
    const params = JSON.stringify({
      infected: infectedId
    });

    return await api.post(`/people/${id}/report_infection`, params, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  catch (error) {
    console.error(error.response);
    alert('Failed to report');
    return error.response;
  }
}

export const getReportInfecteds = async () => {
  try {
    return await api.get('/report/infected');
  }
  catch (error) {
    console.error(error.response);
    return error.response;
  }
}

export const getReportNonInfecteds = async () => {
  try {
    return await api.get('/report/non_infected');
  }
  catch (error) {
    console.error(error.response);
    return error.response;
  }
}

export const getReportPeopleInventory = async () => {
  try {
    return await api.get('/report/people_inventory');
  }
  catch (error) {
    console.error(error.response);
    return error.response;
  }
}

export const getReportInfectedPoints = async () => {
  try {
    return await api.get('/report/infected_points');
  }
  catch (error) {
    console.error(error.response);
    return error.response;
  }
}
