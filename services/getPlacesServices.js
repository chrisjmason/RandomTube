import fetch from 'cross-fetch';

export const getPlaces = async (location, callback) => {
  console.log("location", location);
  return fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location.Latitude+','+location.Longitude+'&rankby=distance&type=bar&key=AIzaSyAaRUCFISnm0FXMLXoVwsNVz-9w0RmrpRs')
    .then(res => res.json());
};