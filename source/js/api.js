import data from './../json/data.json';


const getData = (onError, onSucces) = {
  
}
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
    reject('Ошибка');
  }, 0)
});
promise.then((data) => {
  const flats = data;
  console.log(flats);
});
