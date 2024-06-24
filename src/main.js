import { sortData} from './dataFunctions.js';
import { filterData} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const rootContainer = document.querySelector('#root');
const filterSelect = document.querySelector('#filter-gender');
const yearSelect = document.querySelector('#filter-year');
const chaptersSelect = document.querySelector('#filter-chapters');
const orderSelect = document.querySelector('#order-select');
const clearButton = document.querySelector('#button-clear');

// Función para renderizar los elementos filtrados y ordenados
const renderFilteredItems = (filterBy, filterValue, yearValue, chaptersValue, sortOrder) => {
  let filteredData = filterData(data, filterBy, filterValue);
  
  if (yearValue !== "all") {
    filteredData = filterData(filteredData, "year", parseInt(yearValue));
  }
  
  if (chaptersValue !== "all") {
    filteredData = filterData(filteredData, "chapters", parseInt(chaptersValue));
  }
  
  const sortedData = sortData(filteredData, "name", sortOrder);
  
  rootContainer.innerHTML = '';
  const ulElement = renderItems(sortedData);
  rootContainer.appendChild(ulElement);
};

// Iniciar con todos los datos en pantalla
renderFilteredItems("gender", "all", "all", "all", "asc");

// Agregar event listener para el select de género
filterSelect.addEventListener('change', (event) => {
 const filterValue = event.target.value;
 const yearValue = yearSelect.value;
 const chaptersValue = chaptersSelect.value;
 const sortOrder = orderSelect.value;
 renderFilteredItems("gender", filterValue, yearValue, chaptersValue, sortOrder);
});

// Agregar event listener para el select de año
yearSelect.addEventListener('change', (event) => {
 const filterValue = filterSelect.value;
 const yearValue = event.target.value;
 const chaptersValue = chaptersSelect.value;
 const sortOrder = orderSelect.value;
 renderFilteredItems("gender", filterValue, yearValue, chaptersValue, sortOrder);
});

// Agregar event listener para el select de capítulos
chaptersSelect.addEventListener('change', (event) => {
 const filterValue = filterSelect.value;
 const yearValue = yearSelect.value;
 const chaptersValue = event.target.value;
 const sortOrder = orderSelect.value;
 renderFilteredItems("gender", filterValue, yearValue, chaptersValue, sortOrder);
});

// Agregar event listener para el select de orden
orderSelect.addEventListener('change', (event) => {
 const filterValue = filterSelect.value;
 const yearValue = yearSelect.value;
 const chaptersValue = chaptersSelect.value;
 const sortOrder = event.target.value;
 renderFilteredItems("gender", filterValue, yearValue, chaptersValue, sortOrder);
});

// Función para limpiar los filtros y mostrar todos los datos
clearButton.addEventListener("click", () => {
  filterSelect.value = 'all';
  yearSelect.value = 'all';
  chaptersSelect.value = 'all';
  orderSelect.value = 'asc'; // Puedes establecer el valor de orden por defecto aquí si es necesario

  renderFilteredItems();
});
// Inicializa la página mostrando los datos iniciales


// Agrega event listener para el botón "Limpiar"
clearButton.addEventListener('click', clearFilters);