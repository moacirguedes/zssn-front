import { api } from '../services/httpService';

const serializeItens = (survivor) => {
  return `Water:${survivor.water},Food:${survivor.food},Medication:${survivor.medication},Ammunition:${survivor.ammunition}`;
}

const serializePickItens = (itens) => {
  return `Water:${itens.firstWater};Food:${itens.firstFood};Medication:${itens.firstMedication};Ammunition:${itens.firstAmmunition}`;
}

const serializePaymentItens = (itens) => {
  return `Water:${itens.secondWater};Food:${itens.secondFood};Medication:${itens.secondMedication};Ammunition:${itens.secondAmmunition}`;
}

export const getSurvivors = async () => {
  try {
    return await api.get('people');
  }
  catch (error) {
    return error.response;
  }
}

export const getSurvivor = async (id) => {
  try {
    return await api.get(`people/${id}`);
  }
  catch (error) {
    return error.response;
  }
}

export const getInventory = async (id) => {
  try {
    return await api.get(`people/${id}/properties`);
  }
  catch (error) {
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
      items: serializeItens(survivor)
    });

    return await api.post('people', params, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  catch (error) {  
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
    return error.response;
  }
}

export const getReportInfecteds = async () => {
  try {
    return await api.get('/report/infected');
  }
  catch (error) {
    return error.response;
  }
}

export const getReportNonInfecteds = async () => {
  try {
    return await api.get('/report/non_infected');
  }
  catch (error) {
    return error.response;
  }
}

export const getReportPeopleInventory = async () => {
  try {
    return await api.get('/report/people_inventory');
  }
  catch (error) {
    return error.response;
  }
}

export const getReportInfectedPoints = async () => {
  try {
    return await api.get('/report/infected_points');
  }
  catch (error) {
    return error.response;
  }
}

export const postTrade = async (id, secondName, itens) => {
  try {
    const params = JSON.stringify({
      consumer: {
        name: secondName,
        pick: serializePickItens(itens),
        payment: serializePaymentItens(itens)
      }
    });

    return await api.post(`/people/${id}/properties/trade_item.json`, params, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  catch (error) {
    return error.response;
  }
}
