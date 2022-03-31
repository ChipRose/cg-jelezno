const projectValues = {
  znak: 'ZNAK',
  lomonosov: 'На Ломоносова',
  vasilki: 'Васильки',
  kalinina: 'На Калинина',
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

const setFilter = (...callbacks) => {
  filter.addEventListener('input', (evt) => {
    callbacks.forEach((cb) => cb(evt));
  })
};

const clearCheckbox = () => {
  const checkboxSet = filter.querySelectorAll('input:checked');
  checkboxSet.forEach((checkbox) => {
    checkbox.checked = false;
  })
};

const clearForm = (...callbacks) => {
  filter.addEventListener('reset', (evt) => {
    evt.preventDefault();
    callbacks.forEach((cb) => cb());
  })
};

export { setFilter, filterProject, filterRooms, filterPrice, filterSquare, filterPlan, clearCheckbox, clearForm };
