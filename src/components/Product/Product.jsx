import React from 'react';
import Types from '../../Types';

import "./Product.scss";

const Product =  ({
  name,
  productImage,
  salePrice,
  onClickHandler
}) => {
    return (
      <div className="Product">
        <button className="Product__remove-button" onClick={onClickHandler}>
          Remove
        </button>
        <div className="Product__image-wrapper">
          <img src={productImage} alt={name} className="Product__image" />
        </div>
        <p className="Product__name">
          {name}
        </p>
        <div className="Product__footer">
          <span className="Product__price">
            {salePrice}
          </span>
          <span className="Product__price-label">
            Per stuck / excl. btw
          </span>
        </div>
      </div>
    );
};

Product.propTypes = {
  name: Types.string.isRequired,
  productImage: Types.string.isRequired,
  salePrice: Types.string.isRequired,
  onClickHandler: Types.func.isRequired,
};

export default Product;