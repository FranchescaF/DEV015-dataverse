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
  const calculateButton = document.getElementById("button-calculate");
  const averageContainer = document.getElementById("average-container");
  const averageContainer1 = document.getElementById("average-container1");
  const averageContainer2 = document.getElementById("average-container2");
  const flowerContainer = document.getElementById('falling-flowers');

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
    averageContainer.classList.remove('show');
    averageContainer1.classList.remove('show1');
    averageContainer2.classList.remove('show2');


  });

  metricsButton.addEventListener("click", () => {
    const metricsItems = metricsData(data);
    displayCards(metricsItems);
  });

  calculateButton.addEventListener("click", () => {
    const stats = computeStats(data);
    const { minValue, mostCommonGenre, highestAudienceDorama } = stats;

    averageContainer.innerHTML = `
    <p>Promedio de capítulos de los Kdramas: ${minValue}</p>
    `;
    averageContainer.classList.add('show');

    averageContainer1.innerHTML = `
    <p>Género más promocionado: ${mostCommonGenre}</p>
  `;
    averageContainer1.classList.add('show1');

    averageContainer2.innerHTML = `
    <p>Kdrama con mayor audiencia: ${highestAudienceDorama.name} (${highestAudienceDorama.facts.audiencePercentage}%)</p>
  `;
    averageContainer2.classList.add('show2');
  });

  function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Posición inicial aleatoria en el eje X
    flower.style.left = `${Math.random() * 100}vw`;

    // Duración aleatoria de la animación
    flower.style.animationDuration = `${5 + Math.random() * 5}s`;

    // Retardo aleatorio de la animación
    flower.style.animationDelay = `${Math.random() * 5}s`;

    // Añadimos la flor al contenedor
    flowerContainer.appendChild(flower);

    // Eliminamos la flor una vez termina la animación
    flower.addEventListener('animationend', () => {
      flowerContainer.removeChild(flower);
    });
  }

  // Creamos varias flores de forma periódica
  setInterval(createFlower, 500); // Ajusta este valor para cambiar la frecuencia

});
