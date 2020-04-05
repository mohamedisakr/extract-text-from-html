import { getProducts } from "./dal-facade.js"; //, getProductById

const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", handleAddToCart);

getProducts().then((products) => {
  displayProducts(products);
});

export function displayProducts(products) {
  //   console.log(products);
  products.forEach((prod) => {
    let proDiv = document.createElement("div");
    proDiv.setAttribute("data-id", prod.id);

    proDiv.innerHTML = ` 
        <img class="product__image" src="${prod.image}" alt="${prod.name}"/>
        <h2 class="product__name">${prod.name}</h2>
        <h3 class="product__price">${prod.price}</h3>
        <button class="btn btn--primary" data-action="ADD_TO_CART">Add To Cart</button>`;
    console.log(proDiv);
    productsDiv.appendChild(proDiv);
    // console.log(productsDiv);
  });
}

function handleAddToCart(event) {
  console.log(event.target);
}
