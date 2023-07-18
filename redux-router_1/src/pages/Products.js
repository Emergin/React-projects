import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/product/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/product/p3">An online course</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
