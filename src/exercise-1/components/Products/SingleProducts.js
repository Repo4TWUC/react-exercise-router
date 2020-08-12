import React from 'react';
import products from '../../../exercise-2/mockups/data.json';
import './SingleProducts.scss'

class SingleProducts extends React.Component {
  render() {
    const {match: {params} } = this.props;
    const curProduct = Object.values(products)
        .find(itm => itm.id === Number(params.id));
    const messages = Object.keys(curProduct)
        .map(key =>
                <div className="field" key={key}>
                  <span className="key">{key}: </span>
                  <span className="value">{curProduct[key]}</span>
                </div>
        );

    return (
        <section className="single-product">
          <h3>Product Details: </h3>
          <div>
            {messages}
          </div>
        </section>
    );
  }
}

SingleProducts.propTypes = {};

export default SingleProducts;
