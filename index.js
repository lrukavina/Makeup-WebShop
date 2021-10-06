// Import stylesheets
import './style.css';

// Other imports
import * as ItemsService from './service/itemsService.js';

// Write Javascript code!
const appDiv = document.getElementById('items');
const loadingSpinner = document.getElementById('loading');

//api site https://makeup-api.herokuapp.com/

//variables
let items = [];

(async () => {
  items = await ItemsService.fetchItems();
  loadingSpinner.parentElement.removeChild(loadingSpinner);
  ItemsService.setItems(items, appDiv);
})();
