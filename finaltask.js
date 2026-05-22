let allProducts = [];
let cart = [];

const productsDiv = document.getElementById("products");
const message = document.getElementById("message");
const cartCount = document.getElementById("cartCount");
const total = document.getElementById("total");


// Loading Message
message.innerHTML = "Loading...";


// Fetch API
fetch("https://fakestoreapi.com/products")

  .then(res => res.json())

  .then(data => {

    message.innerHTML = "";

    allProducts = data;

    displayProducts(data);

  })

  .catch(error => {

    console.log(error);

    // Error UI
    message.innerHTML = "Error Fetching Data";

  });




// Display Products
function displayProducts(products){

  productsDiv.innerHTML = "";

  products.forEach(product => {

    productsDiv.innerHTML += `

      <div class="card">

        <!-- Product Image -->
        <img src="${product.image}" />

        <!-- slice() -->
        <h3>
          ${product.title.slice(0,20)}...
        </h3>

        <p>
          ${product.description.slice(0,50)}...
        </p>

        <!-- Price -->
        <div class="price">
          $${product.price}
        </div>

        <div class="btns">

          <!-- Add To Cart -->
          <button onclick="addToCart(${product.id})">
            Add To Cart
          </button>

          <!-- Remove -->
          <button onclick="removeFromCart(${product.id})">
            Remove
          </button>

        </div>

      </div>

    `;
  });
}




// Search Feature
document
  .getElementById("search")
  .addEventListener("keyup", function(){

    const searchText = this.value.toLowerCase();

    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(searchText)
    );

    displayProducts(filtered);

  });




// Category Filter
function filterCategory(category){

  if(category === "all"){

    displayProducts(allProducts);

    return;
  }

  const filtered = allProducts.filter(product =>
    product.category === category
  );

  displayProducts(filtered);
}




// Add To Cart
function addToCart(id){

  const product = allProducts.find(p => p.id === id);

  cart.push(product);

  updateCart();
}




// Remove From Cart
function removeFromCart(id){

  const index = cart.findIndex(item => item.id === id);

  if(index !== -1){

    cart.splice(index,1);

  }

  updateCart();
}




// Update Cart Count + Total
function updateCart(){

  // Cart Count
  cartCount.innerHTML = cart.length;

  // Total Price
  let totalPrice = 0;

  cart.forEach(item => {

    totalPrice += item.price;

  });

  total.innerHTML = `
    Total: $${totalPrice.toFixed(2)}
  `;
}

