const projectValues = {
  znak: 'ZNAK',
  lomonosov: 'На Ломоносова',
  vasilki: 'Васильки',
  kalinina: 'На Калинина',
};

const planValues = {
  moreToilets: '2 и более санузла',
  bigLoggia: 'Большая лоджия',
  wardrobe: 'Гардеробная',
  kitchenLivingRoom: 'Кухня-гостиная',
  loggia: 'Лоджия',
  laundry: 'Постирочная',
};

const filter = document.querySelector('.flats-filters');

const filterProject = (flat) => {
  let flag = true;

  const projectCheckedFields = document.querySelectorAll('input[name=project]:checked');

  for (let project of projectCheckedFields) {
    if (flat.housingComplexName === projectValues[project.value]) {
      return flag = true;
    } else {
      flag = false;
    }
  }

  return flag;
};

const filterRooms = (flat) => {
  let flag = true;

  const roomFields = document.querySelectorAll('input[name=rooms]');

  for (let room of roomFields) {
    if (room.checked) {
      const isIntValue = (room.value.length === parseInt(room.value).toString().length) ? true : false;
      if (isIntValue) {
        return flag = (flat.roomsQuantity === parseInt(room.value)) ? true : false;
      } else {
        return flag = (flat.roomsQuantity >= parseInt(room.value)) ? true : false;
      }
    }
  }

  return flag;
};

const filterPrice = (flat) => {
  let flag = true;

  const MILLION_COEFFICIENT = Math.pow(10, 6);

  const minPrice = document.querySelector('input[name=priceMin]');
  const maxPrice = document.querySelector('input[name=priceMax]');

  const flatPrice = flat.minPrice * MILLION_COEFFICIENT;

  (flatPrice >= parseFloat(minPrice.value) && flatPrice <= parseFloat(maxPrice.value)) ? flag = true : flag = false;

  return flag;
};

const filterSquare = (flat) => {
  let flag = true;

  const minSquare = document.querySelector('input[name=squareMin]');
  const maxSquare = document.querySelector('input[name=squareMax]');

  (flat.square >= parseFloat(minSquare.value) && flat.square <= parseFloat(maxSquare.value)) ? flag = true : flag = false;

  return flag;
};

const planFeature = document.querySelector('input[name=plans]:checked');

const filterPlan = (flat) => {
  let flag = true;

  const planFeatures = document.querySelectorAll('input[name=plans]:checked');

  for (let plan of planFeatures) {
    if (!flat.planAdvantages.includes(plan.value)) {
      return flag = false;
    }
  }

  return flag;
};

const setFilter = (cb) => {
  filter.addEventListener('input', () => {
    cb();
  })
};

export { setFilter, filterProject, filterRooms, filterPrice, filterSquare, filterPlan };
