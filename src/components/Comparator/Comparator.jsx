import React from 'react';

import Types from '../../Types';
import Product from '../Product';
import ComparatorFilter from '../ComparatorFilter';
import ComparatorLine from './ComparatorLine';
import Badges from '../Badges';
import {
    getFeaturesFromProducts,
    sortFeaturesAlphabetically,
    moveItemToFront,
} from '../../helpers';

import './Comparator.scss';

const FEATURE_BADGES = 'badges';

/**
 * @description Render product badges as images! 
 * @param {string} badges separated by '|'
 * @returns {React.Component} Badges Component
 */
const renderBadges = badges => <Badges badges={badges.split('|')} />;


/**
 * @description Comparator component
 * @param {React.Props<Object>} props
 * @returns {React.Component} props
 */
const Comparator =  ({
  products,
  productsToCompare,
  featuresToCompare,
}) => {
    const getFeatures = getFeaturesFromProducts(productsToCompare);

    // Sort features Alphabetically and move `Badges` to the front.
    const sortedFeatures = sortFeaturesAlphabetically(featuresToCompare);
    const sortedFeaturesWithBadgesAtTheFront = moveItemToFront(sortedFeatures)(FEATURE_BADGES);

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
                {sortedFeaturesWithBadgesAtTheFront.map(feature => 
                    <ComparatorLine
                        key={feature}
                        propertyName={feature}
                        renderValue={feature === FEATURE_BADGES ? renderBadges : null}
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
};

export default Comparator;