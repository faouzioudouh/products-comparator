import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';

import Types from '../../Types';
import { loadProducts } from '../../actions/productActions';
import { getProductsBySky } from '../../selectros/products';
import Zamro from './Zamro';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

class ZamroContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        products: [],
        isLoading: false
    };
  }

  componentDidMount() {
    this.props.loadProducts(...this.props.productsIds);
  }

  render() {
    const { products, isProductsLoading, featuresToCompare, productsToCompare, error } = this.props;

    if (isProductsLoading) {
      return <Spinner />
    } else if(error) {
      return <ErrorMessage message={error} />
    } else {
      return (<Zamro
        products={products}
        productsToCompare={productsToCompare}
        featuresToCompare={featuresToCompare}
    />);
    }
  }
}

ZamroContainer.propTypes = {
  loadProducts: Types.func,
  products: Types.arrayOf(Types.product),
  featuresToCompare: Types.arrayOf(Types.string),
  productsIds: Types.arrayOf(Types.string),
};

const mapStateToProps = state => {
    const products = state.products.items;
    return {
        products,
        isProductsLoading: state.products.productsLoading,
        error: state.products.error,
        productsToCompare: getProductsBySky(state)(...state.comparator.productsIds),
    };
};

const mapDispatchToProps = dispatch => ({
    loadProducts: compose(dispatch, loadProducts),
});

export default connect(mapStateToProps, mapDispatchToProps)(ZamroContainer);
