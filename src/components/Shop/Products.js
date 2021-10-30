import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    price: 5,
    title: "First Book ",
    description: "This is my First Book ",
  },
  {
    id: 2,
    price: 6,
    title: "Second Book ",
    description: "This is my Second Book ",
  },
  {
    id: 3,
    price: 7,
    title: "Third Book ",
    description: "This is my Third Book ",
  },
  {
    id: 4,
    price: 8,
    title: "Fourth Book ",
    description: "This is my Fourth Book ",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
