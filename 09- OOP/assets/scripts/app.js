class Product {
  constructor(title, image, desc, price) {
    (this.title = title),
      (this.imageUrl = image),
      (this.description = desc),
      (this.price = price);
  }
}

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
    cartEl.className = "cart";
    return cartEl;
  }
}

class ProductItem {
  //hold the logic to render single item
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log(this.product);
  }

  renderItem() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
    <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
      <h2>${this.product.title}</h2>
      <h3>\$${this.product.price}</h3>
      <h4>${this.product.description}</h4>
      <button>Add to Cart</button>
      </div>
    </div>
    `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this)); //bind this eventlistener to this prroduct snippet
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.621xw:0.953xh;0.194xw,0.0471xh&resize=1200:*",
      "Soft with flowerish smell",
      "19.99"
    ),
    new Product(
      "A carpet",
      "https://hips.hearstapps.com/hmg-prod/images/full-frame-shot-of-carpet-royalty-free-image-939098600-1548357822.jpg?crop=1xw:1xh;center,top&resize=980:*",
      "Clean and without dog's hairs",
      "59.99"
    ),
  ];
  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.renderItem();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    const cart = new ShoppingCart().render();
    // const cartEl = cart.render();
    const productList = new ProductList().render();
    // const prodListEl = productList.render();

    renderHook.append(cart);
    renderHook.append(productList);
  }
}

const shop = new Shop();
shop.render();
