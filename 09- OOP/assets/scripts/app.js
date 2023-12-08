class Product {
  constructor(title, image, desc, price) {
    (this.title = title),
      (this.imageUrl = image),
      (this.description = desc),
      (this.price = +price);
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRoodElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: $${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, curItem) => {
      return prevValue + curItem.price;
    }, 0);
    return sum;
  }

  constructor(renderHookId) {
    //calls this constructor and parent constructor (extends component)
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    // const cartEl = document.createElement("section");
    const cartEl = this.createRoodElement("section", "cart");
    cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
    // cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    // return cartEl;
  }
}

class ProductItem extends Component {
  //hold the logic to render single item
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    console.log(this.product);
    App.addProductToCart(this.product);
  }

  render() {
    // const prodEl = document.createElement("li");
    // prodEl.className = "product-item";
    const prodEl = this.createRoodElement("li", "product-item");
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
    // return prodEl;
  }
}

class ProductList extends Component {
  products = [];
  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
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
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, "prod-list");
    }
  }

  render() {
    // const prodList = document.createElement("ul");
    this.createRoodElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
    // prodList.id = "prod-list";
    // prodList.className = "product-list";
    //   const productItem = new ProductItem(prod);
    //   const prodEl = productItem.renderItem();
    //   prodList.append(prodEl);
    //   productItem.renderItem();

    // return prodList;
  }
}

class Shop extends Component {
  constructor() {
    super();
  }
  render() {
    // const renderHook = document.getElementById("app");
    // this.cart = new ShoppingCart();
    // const cartEl = this.cart.render();
    this.cart = new ShoppingCart("app");
    new ProductList("app");
    // this.cart.render();
    // const productList = new ProductList();
    // const prodListEl = productList.render();
    // productList.render();

    // renderHook.append(cartEl);
    // renderHook.append(prodListEl);
  }
}
class App {
  static init() {
    const shop = new Shop();
    // shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
