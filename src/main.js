import { filterData, sortData, metricsData,computeStats} from './dataFunctions.js';
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
  const calculateButton = document.querySelector('#button-calculate');
  const averageContainer = document.getElementById('average-container');
  const averageResult = document.getElementById('average-result');

  filterSelectGender.addEventListener("change", (event) => {
    const selectedValueGender = event.target.value;
    const filterItemsGender = filterData(data, "gender", selectedValueGender);
    resetSelectIndex(filterSelectYear);
    resetSelectIndex(filterSelectChapters);
    resetSelectIndex(orderSelect);
    displayCards(filterItemsGender);
  });

  filterSelectYear.addEventListener("change", (event) => {
    const selectedValueYear = event.target.value;
    const filterItemsYear = filterData(data, "year", selectedValueYear);
    resetSelectIndex(filterSelectGender);
    resetSelectIndex(filterSelectChapters);
    resetSelectIndex(orderSelect);
    displayCards(filterItemsYear);
  });

  filterSelectChapters.addEventListener("change", (event) => {
    const selectedValueChapters = event.target.value;
    const filterItemsChapters = filterData(data, "chapters", selectedValueChapters);
    resetSelectIndex(filterSelectGender);
    resetSelectIndex(filterSelectYear);
    resetSelectIndex(orderSelect);
    displayCards(filterItemsChapters);
  });

  orderSelect.addEventListener("change",(event) => {
    const selectedValueOrder = event.target.value;
    const orderItemsName = sortData(data, "name", selectedValueOrder);
    resetSelectIndex(filterSelectGender);
    resetSelectIndex(filterSelectChapters);
    resetSelectIndex(filterSelectYear);
    displayCards(orderItemsName);
  });

  clearButton.addEventListener("click", () => {
    filterSelectGender.value = 'all';
    filterSelectYear.value = 'all';
    filterSelectChapters.value = 'all';
    orderSelect.value = 'all';
    displayCards(data);
    averageContainer.innerHTML = '';
    averageContainer.style.display = 'none';

    
  });

  metricsButton.addEventListener("click", () => {
    const metricsItems = metricsData(data);
    displayCards(metricsItems);
  });

  calculateButton.addEventListener("click", () => {
    const average = computeStats(data);
    averageContainer.innerHTML = `Promedio de capítulos: ${average}`;
    averageContainer.style.display = 'block'; 
    
  });
});
