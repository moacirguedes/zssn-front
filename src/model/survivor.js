import api from '../services/httpService';

export const getSurvivors = async () => {
  try {
    const { data } = await api.get('people');
    return data;
  }
  catch (error) {
    console.log(error);
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

    const { data } = await api.post('people', params, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return data;
  }
  catch (error) {
    alert(JSON.stringify(error.response.data));
  }
}
