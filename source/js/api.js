import data from './../json/data.json';

const GET_LINK = 'https://23.javascript.pages.academy/keksobooking/data404';

const getData = (onSuccess, onError) => {
  fetch(GET_LINK)
    .then((response) => {
      let flats = response.ok? response.json(): data;
      return flats;
    })
    .then((flats) => onSuccess(flats))
    .catch(() => onError());
};

export { getData };