import { sortData} from './dataFunctions.js';
import { filterData} from './dataFunctions.js';
import { metricsData} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const mainElement = document.getElementById("root");
let ulElement = renderItems(data);
mainElement.appendChild(ulElement);


function resetSelectIndex(selectElement) {
  selectElement.selectedIndex = 0;
}

function displayCards(data) {
  mainElement.removeChild(ulElement);
  ulElement = renderItems(data);
  mainElement.appendChild(ulElement);
}

document.addEventListener("DOMContentLoaded", () => {

  const filterSelectGender = document.querySelector('#filter-gender');
  const filterSelectYear = document.querySelector("#filter-year");
  const filterSelectChapters = document.querySelector("#filter-chapters");
  const orderSelect = document.querySelector("#order-select");
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  const metricsButton = document.querySelector(".metrics");

  filterSelectGender.addEventListener("change", (event) => {
    const selectedValueGender = event.target.value;
    const filterItemsGender = filterData(data, "gender", selectedValueGender == 'all' ? 'all' : selectedValueGender.trim());
    displayCards(filterItemsGender);
  });

  filterSelectYear.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const filterItemsYear = filterData(data, "year", selectedValue);
    displayCards(filterItemsYear);
  });

  filterSelectChapters.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const filterItemsChapters = filterData(data, "chapters", selectedValue);
    displayCards(filterItemsChapters);
  });

  orderSelect.addEventListener("change",(event) => {
    const selectedValueOrder = event.target.value;
    const orderItemsName = sortData(data, "name", selectedValueOrder);
    displayCards(orderItemsName);
  });

  clearButton.addEventListener("click", () => {
    filterSelectGender.value = 'all';
    filterSelectYear.value = 'all';
    filterSelectChapters.value = 'all';
    orderSelect.value = 'asc';
    displayCards(data);
  });

  metricsButton.addEventListener("click", () => {
    const metricsItems = metricsData(data);
    displayCards(metricsItems);
  });
});
