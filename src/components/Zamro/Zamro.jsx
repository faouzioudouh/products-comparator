import React from 'react';
import Comparator from '../Comparator';
import Types from '../../Types';

import "./Zamro.scss";

const Zamro = ({
    products,
    productsToCompare,
    featuresToCompare,
}) => (
  <div className="Zamro">
    <h1 className="Zamro__title"> {productsToCompare.length} producten vergeliken</h1>

    <section className="Comparator__container">
      <Comparator
        products={products}
        productsToCompare={productsToCompare}
        featuresToCompare={featuresToCompare}
      />
    </section>
  </div>
);

Zamro.propTypes = {
  products: Types.arrayOf(Types.product),
  featuresToCampare: Types.arrayOf(Types.string),
};

export default Zamro;