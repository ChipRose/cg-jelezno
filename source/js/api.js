import data from './../json/data.json';

const GET_URL = 'https://23.javascript.pages.academy/keksobooking/data404';

fetch(GET_URL, {
  method: 'GET'
})
  .then((response) => {
    let flats = response.ok ? response.json: data;
    return flats;
  })
  .then((flats) => { console.log(flats) })
  .catch((err) => {
    throw new Error('Данные не получены', err);
  })
