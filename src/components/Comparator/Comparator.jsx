import React from 'react';

import Types from '../../Types';
import Product from '../Product';
import ComparatorFilter from '../ComparatorFilter';
import ComparatorLine from './ComparatorLine';
import { getFeaturesFromProducts } from '../../helpers';

import './Comparator.scss';

/**
 * @description Comparator component
 * @param {React.Props<Object>} props
 * @returns {React.Component} props
 */
const Comparator =  ({
  products,
  productsToCompare,
  featuresToCompare,
  renderCompareValue,
}) => {
    const getFeatures = getFeaturesFromProducts(productsToCompare);

    return (
      <div className="Comparator">
        <div className="Comparator__container">
            <div className="Comparator__header">
                <div className="ComparatorFilter__container">
                    <ComparatorFilter products={products} productsToCompare={productsToCompare} />
                </div>
                <div className="Comparator__products">
                    {productsToCompare.map(product =>
                            <div className="ComparatorFilter__product" key={product.sku}>
                                <Product {...product} />
                            </div>
                        )}
                </div>
            </div>

            <div className="Comparator__lines">
                {featuresToCompare.map(feature => 
                    <ComparatorLine
                        key={feature}
                        propertyName={feature}
                        renderValue={renderCompareValue}
                        features={getFeatures(feature)}
                    />
                )}
            </div>
        </div>
      </div>
    );
};

Comparator.propTypes = {
  products: Types.arrayOf(Types.product),
  productsToCompare: Types.arrayOf(Types.product),
  renderCompareValue: Types.func,
};

export default Comparator;