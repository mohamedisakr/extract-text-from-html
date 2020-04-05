/*
 <div class="product">
    <img
        class="product__image"
        src="img/products/beer.svg"
        alt="Beer"
    />
    <h2 class="product__name">Beer</h2>
    <h3 class="product__price">6.00</h3>
    <button class="btn btn--primary" data-action="ADD_TO_CART">
        Add To Cart
    </button>
</div>
*/
const products = document.querySelectorAll(".product");
const productList = [];

// {id, name, image, price, }
products.forEach(function(element, index, list) {
  const image = element.querySelector("img").getAttribute("src");
  //   const image= imgTag;
  //   console.log(img.getAttribute("src"));

  const name = element.querySelector("h2").textContent;
  //   console.log(name.textContent);

  const price = element.querySelector("h3").textContent;
  //   console.log(price);
  console.log(index + 1, name, price, image);
  const product = { index: index + 1, name, price, image };
  productList.push(product);
});
console.log(productList);
const str = JSON.stringify(productList);
console.log(str);
