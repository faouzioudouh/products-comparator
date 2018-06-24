import React from 'react';
import Comparator from '../Comparator';
import Types from '../../Types';

import "./Zamro.scss";

/**
 * @description Zamro component is the root component renders the comparator!
 * @param {React.Props<Object>} Props 
 * @returns {React.Component}
 */
const Zamro = ({
    products,
    productsToCompare,
    featuresToCompare,
    renderCompareValue,
}) => (
  <div className="Zamro">
    <h1 className="Zamro__title">{productsToCompare.length} producten vergeliken</h1>

    <section className="Comparator__container">
      <Comparator
        products={products}
        productsToCompare={productsToCompare}
        featuresToCompare={featuresToCompare}
        renderCompareValue={renderCompareValue}
      />
    </section>
  </div>
);

Zamro.propTypes = {
  products: Types.arrayOf(Types.product),
  productsToCompare: Types.arrayOf(Types.product),
  featuresToCompare: Types.arrayOf(Types.string),
  renderCompareValue: Types.func,
};

export default Zamro;