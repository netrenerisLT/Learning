import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 5,
    title: "Chickn Masala",
    description: "Ant kraiko laikomu vistu",
  },
  {
    id: "p2",
    price: 5.59,
    title: "Chickn Nuggets",
    description: "Gal ir laikomu vistu ant kraiko ",
  },
  {
    id: "p3",
    price: 8.99,
    title: "Chickn Wings",
    description: "Ant kraiko nelaikomu vistu",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
