class ProductItem {
  title = "DEFAULTVALUE";
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    (this.title = title),
      (this.imageUrl = image),
      (this.description = desc),
      (this.price = price);
  }
}

const productList = {
  products: [
    new ProductItem(
      "A pillow",
      "https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.621xw:0.953xh;0.194xw,0.0471xh&resize=1200:*",
      "Soft with flowerish smell",
      "19.99"
    ),
    new ProductItem(
      "A carpet",
      "https://hips.hearstapps.com/hmg-prod/images/full-frame-shot-of-carpet-royalty-free-image-939098600-1548357822.jpg?crop=1xw:1xh;center,top&resize=980:*",
      "Clean and without dog's hairs",
      "59.99"
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>\$${prod.price}</h3>
        <h4>${prod.description}</h4>
        <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
