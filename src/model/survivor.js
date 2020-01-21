import api from '../services/httpService';

export const getSurvivors = async () => {
  try {
    const { data } = await api.get('people');
    return data;
  }
  catch (error) {
    console.log(error);
    return error.response;
  }
}

export const getSurvivor = async (id) => {
  try {
    return await api.get(`people/${id}`);
  }
  catch (error) {
    alert('Survivor not found');
    return error.response;
  }
}

export const getInventory = async (id) => {
  try {
    return await api.get(`people/${id}/properties`);
  }
  catch (error) {
    console.log(error);
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
    
    return await api.patch(`people/${id}`, params,  {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  catch (error) {
    alert('something went wrong, try again');
    return error.response;
  }
}
