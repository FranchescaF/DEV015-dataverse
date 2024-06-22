import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const rootContainer = document.querySelector('#root');
const filterSelect = document.querySelector('#filter-gender');
const filterSelectYear = document.getElementById('#filter-year');
const filterSelectChapters = document.getElementById('#filter-chapters');

// Funcion para filtrar género
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
// Iniciamos con todos los datos en pantalla
renderFilteredItems("gender","all");

//Agregamos un even listener para el select del filtrado

filterSelect.addEventListener("change",(event) => {
    //Capturamos el valor seleccionado en el select
    const filterValue = event.target.value;
    //Llamamos a la funcion para renderizar los elementos que han sido filtrados
    renderFilteredItems(event.target.name, filterValue);
});
