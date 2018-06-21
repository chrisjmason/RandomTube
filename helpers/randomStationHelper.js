import { stations } from '../data/stations';

export const getRandomStation = (zones) => {
  let selectedStations;
  if(zones !== null){
    selectedStations = stations.filter(station => zones.some(zone => station.Zone === zone.number));
    return selectedStations[Math.floor(Math.random()*selectedStations.length)];
  }
}