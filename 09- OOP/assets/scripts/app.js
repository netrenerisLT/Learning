const productList = {
  products: [
    {
      title: "A pillow",
      imgUrl:
        "https://cdn.thewirecutter.com/wp-content/media/2023/01/bedpillows-2048px-9999.jpg",
      price: "19.99",
      description: "Soft and fresh smelling",
    },
    {
      title: "A carpet",
      imgUrl:
        "https://hips.hearstapps.com/hmg-prod/images/full-frame-shot-of-carpet-royalty-free-image-939098600-1548357822.jpg?crop=1xw:1xh;center,top&resize=980:*",
      price: "49.99",
      description: "Clean and without dog's hairs",
    },
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
        <img src="${prod.imgUrl}" alt="${prod.title}">
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
