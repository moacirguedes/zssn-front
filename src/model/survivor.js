import { api } from '../services/httpService';

const serializeItens = (survivor) => {
  return `Fiji Water:${survivor.water};Campbell Soup:${survivor.food};First Aid Pouch:${survivor.medication};AK47:${survivor.ammunition}`;
}

const serializePickItens = (itens) => {
  return `Fiji Water:${itens.pick.fijiWater};Campbell Soup:${itens.pick.campbellSoup};First Aid Pouch:${itens.pick.firstAidPouch};AK47:${itens.pick.ak47}`;
}

const serializePaymentItens = (itens) => {
  return `Fiji Water:${itens.payment.fijiWater};Campbell Soup:${itens.payment.campbellSoup};First Aid Pouch:${itens.payment.firstAidPouch};AK47:${itens.payment.ak47}`;
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
