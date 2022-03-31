import { setFilter } from "./filter";

const filterViewList = document.querySelector('#filter-tag-list');

const setFilterView = (eventElement) => {
  const newItem = document.createElement('li');
  const newButton = document.createElement('button');
  newButton.textContent = eventElement.target.value;
  newItem.appendChild(newButton);
  filterViewList.appendChild(newItem);
};

export { setFilterView };