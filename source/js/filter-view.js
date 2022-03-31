import { setFilter } from './filter.js';

const filterViewList = document.querySelector('#filter-tag-list');
const filterViewSet = [];

const createFilterViewSet = (eventElement) => {
  if(eventElement.target.type!=='number') {
    const index = filterViewSet.indexOf(eventElement.target.value);
    if (index === -1) {
      filterViewSet.push(eventElement.target.value);
    } else {
      filterViewSet.splice(index, 1);
    }
  }
  return filterViewSet;
};

const cardForRender = setFilter(createFilterViewSet);
console.log(cardForRender);

//const setFilterView = () => {
  //filterViewList.innerHTML='';
  //createFilterViewSet.forEach((element) => {
    //console.log(createFilterViewSet());
    // const newItem = document.createElement('li');
    // const newButton = document.createElement('button');
    // newButton.textContent = element;
    // newItem.appendChild(newButton);
    // filterViewList.appendChild(newItem);
  //});
//};


