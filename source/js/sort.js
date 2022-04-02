const sortButton = document.querySelector('.sort-button');

const chooseCompare = () => {
  let flag = true;

  const sortButtonCheck = sortButton.querySelector('input:checked');
  const sortLink = sortButton.querySelector('.sort-button__link');

  if (sortButtonCheck.id === 'max-min') {
    flag = false;
    sortLink.textContent = 'Сначала дороже';
  } else {
    flag = true;
    sortLink.textContent = 'Сначала дешевле';
  }

  const comparePromosMin = (priceA, priceB) => {
    return priceA.minPrice - priceB.minPrice;
  };

  const comparePromosMax = (priceA, priceB) => {
    return priceB.minPrice - priceA.minPrice;
  };

  return flag ? comparePromosMin : comparePromosMax;
};

const clearSort = () => {
  const sortButtonMin = sortButton.querySelector('#min-max');
  sortButtonMin.checked = true;
}

const setSort = (cb) => {
  sortButton.addEventListener('click', () => {
    cb();
  })
};

export {setSort, chooseCompare, clearSort};
