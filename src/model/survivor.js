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
