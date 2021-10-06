// Import stylesheets
import './style.css';

// Other imports
import * as ItemsService from './service/itemsService.js';

// Write Javascript code!
const appDiv = document.getElementById('items');

//api site https://makeup-api.herokuapp.com/

//variables
let items = [];

(async () => {
  items = await ItemsService.fetchItems();
  ItemsService.setItems(items, appDiv);
})();
