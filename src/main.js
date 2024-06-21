import { sortData} from './dataFunctions.js';
import { filterData} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const rootContainer = document.querySelector('#root');
const filterSelect = document.querySelector('#filter-gender');
const sortSelect = document.querySelector('#order-select');

// Funcion para iterar la data filtrada
const renderFilteredItems = (filterBy, value) => {
  //Filtramos los datos
  const filteredData = filterData(data,filterBy,value);
  // Limpiamos la pantalla
  rootContainer.innerHTML = ' ';
  //Iteramos los elementos que han sido filtrados
  const ulElement = renderItems(filteredData);
  //Agregamos los datos filtrados al contenedor
  rootContainer.appendChild(ulElement);
};


//Funcion para iterar la data
const renderSortedItems = (sortBy,sortOrder) => {
    //ordenamos la data
    const sortedData = sortData(data, sortBy, sortOrder);
    //limpiamos la pantalla
    rootContainer.innerHTML = ' ';
    // Iteramos los elementos ordenados
    const ulElement = renderItems(sortedData);
    // Agregamos los datos ordenados al contenedor
    rootContainer.appendChild(ulElement);
};

// Iniciamos con todos los datos en pantalla
renderFilteredItems("gender","all");

//Agregamos un even listener para el select del filtrado
filterSelect.addEventListener('change',(event) => {
//Capturamos el valr seleccionado en el select
  const filterValue = event.target.value;
  //Llamamos a la funcion para renderizar los elementos que han sido filtrados
  renderFilteredItems(event.target.name, filterValue);
});

//Agregamos un event listener para el select de orden
sortSelect.addEventListener('change', (event) => {
    //Capturamos el valor seleccionado en el select
    const sortOrder = event.target.value;
    // llamamos a la funcion para iterar los elementos ordenados
    renderSortedItems("name", sortOrder);
});