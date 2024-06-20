//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const rootContainer = document.querySelector('#root');
const selectElement = document.querySelector('#filter');

const ulElement = renderItems(data);
rootContainer.appendChild(ulElement);

//console.log(example, renderItems(data), data);
// Invocación de renderItems
renderItems(data)
