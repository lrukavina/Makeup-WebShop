export async function fetchItems() {
  const response = await fetch(
    'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  );
  let items = await response.json();
  return items;
}


export function setItems(items, appDiv){
  items.forEach(function(element){
    appDiv.innerHTML += ` <div class="item-card">
    <span id="brandName">${element.brand}</span>
    <img
      id="itemImg"
      src="${element.image_link}"
      width="100"
      alt="item"
    />
    <h2 id="productName">${element.name}</h2>
    <span id="priceTag">Price: ${element.price}$</span>
    <button id="moreInfo">More</button>
  </div>`;
  });
}
