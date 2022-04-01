import { returnTextContent } from './vocabulary.js';

let viewSet = [];

const filter = document.querySelector('.flats-filters');
const filterViewList = document.querySelector('#filter-tag-list');
const filterQuantityField = document.querySelector('#filter-quantity');

const createFilterViewSet = (eventElement) => {
  if (eventElement.target.type !== 'number') {
    let filterNumber = 0;
    viewSet = [];
    const allCheckProperties = filter.querySelectorAll('input:checked');
  
    allCheckProperties.forEach((property) => {
      viewSet.push(returnTextContent(property.id));
      filterNumber++;
      filterQuantityField.textContent = filterNumber;
    })
  }

  clearFilterViewList();

  viewSet.forEach((element) => {
    const newItem = document.createElement('li');
    const newButton = document.createElement('button');
    newItem.classList.add('filter-tag__item');
    newButton.classList.add('clear--button');
    newButton.classList.add('filter-tag__button');
    newButton.type = 'button';
    newButton.textContent = element;

    newItem.appendChild(newButton);
    filterViewList.appendChild(newItem);
  });
};

const clearFilterViewList = () => {
  filterViewList.innerHTML = '';
}

export { createFilterViewSet, clearFilterViewList };



