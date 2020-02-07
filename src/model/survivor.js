import * as SurvivorRepository from '../repositories/survivorRepository';

const serializeItens = (itens) =>
  `Fiji Water:${itens.fijiWater};Campbell Soup:${itens.campbellSoup};First Aid Pouch:${itens.firstAidPouch};AK47:${itens.ak47}`;

export const infectedStatusToString = (infected) => infected ? 'True' : 'False'

export const extractProfileId = (location) =>
  location.substring(location.lastIndexOf('/') + 1);

export const getSurvivors = async () => await SurvivorRepository.getSurvivors();

export const getSurvivor = async (id) => await SurvivorRepository.getSurvivor(id);

export const getInventory = async (id) => await SurvivorRepository.getInventory(id);

export const getReportInfecteds = async () => await SurvivorRepository.getReportInfecteds();

export const getReportNonInfecteds = async () => await SurvivorRepository.getReportNonInfecteds();

export const getReportPeopleInventory = async () => await SurvivorRepository.getReportPeopleInventory();

export const getReportInfectedPoints = async () => await SurvivorRepository.getReportInfectedPoints();

export const postSurvivor = async (survivor) => {
  const params = JSON.stringify({
    name: survivor.name,
    age: survivor.age,
    gender: survivor.gender,
    lonlat: survivor.lonlat,
    items: serializeItens(survivor)
  });

  return await SurvivorRepository.postSurvivor(params);
}

export const updateSurvivor = async (id, survivor) => {
  const params = JSON.stringify({
    name: survivor.name,
    age: survivor.age,
    gender: survivor.gender,
    lonlat: survivor.lonlat
  });

  return await SurvivorRepository.updateSurvivor(id, params);
}

export const reportInfected = async (id, infectedId) => {
  const params = JSON.stringify({
    infected: infectedId
  });

  return await SurvivorRepository.reportInfected(id, params);
}

export const postTrade = async (id, secondName, itens) => {
  const params = JSON.stringify({
    consumer: {
      name: secondName,
      pick: serializeItens(itens.pick),
      payment: serializeItens(itens.payment)
    }
  });

  return await SurvivorRepository.postTrade(id, params);
}
