import React from 'react';

import Types from '../../Types';
import ComparatorFilterItem from './ComparatorFilterItem';
import "./ComparatorFilter.scss";

const ComparatorFilter =  ({
    products,
    productsToCompare,
    onFilterChange,
}) => {
    return (
      <div className="ComparatorFilter">
        <ul className="ComparatorFiler_list">
            {products.map(product => {
                const isSelected = productsToCompare.some(productsToCompare => productsToCompare.sku === product.sku);

                return (<li key={product.sku}>
                    <ComparatorFilterItem {...product} isSelected={isSelected} onChange={onFilterChange(product.sku)} />
                </li>);
            })}
        </ul>
      </div>
    );
};

ComparatorFilter.propTypes = {
    products: Types.arrayOf(Types.product),
    productsToCompare: Types.arrayOf(Types.product),
    onFilterChange: Types.func,
};

export default ComparatorFilter;
