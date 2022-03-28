import data from './../json/data.json';

const TIMEOUT_DELAY = 300;


const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  })
}, TIMEOUT_DELAY);

export { getData };
