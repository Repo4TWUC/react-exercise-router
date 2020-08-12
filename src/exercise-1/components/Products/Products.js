import React from 'react';
import products from '../../../exercise-2/mockups/data.json'
import {Link} from "react-router-dom";
import './Products.scss'

class Products extends React.Component {
  render() {
    const allProducts = Object.values(products)
        .map(itm =>
            <div key={itm.name}>
              <Link to={`/products/${itm.id}`} >{itm.name}</Link>
            </div>
        )
    return (
        <section className="products">
          <h3>All Products</h3>
          {allProducts}
        </section>
    );
  }
}

Products.propTypes = {};

export default Products;
