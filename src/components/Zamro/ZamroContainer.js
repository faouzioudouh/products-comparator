import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';

import Types from '../../Types';
import { loadProducts } from '../../actions/productActions';
import { getProductsBySky } from '../../selectros/products';
import Zamro from './Zamro';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import Badges from '../Badges';
import { sortFeaturesAlphabetically, moveItemToFront } from '../../helpers';

const FEATURE_BADGES = 'badges';
class ZamroContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getFormattedProps = this.getFormattedProps.bind(this);

    this.state = {
        products: [],
        isLoading: false
    };
  }

  componentDidMount() {
    this.props.loadProducts(...this.props.productsIds);
  }

  getFormattedProps() {
    const { products, featuresToCompare, productsToCompare } = this.props;

    // Sort features Alphabetically and move `Badges` to the front.
    const sortedFeatures = sortFeaturesAlphabetically(featuresToCompare);
    const sortedFeaturesWithBadgesAtTheFront = moveItemToFront(sortedFeatures)(FEATURE_BADGES);

    return {
      products,
      productsToCompare,
      featuresToCompare: sortedFeaturesWithBadgesAtTheFront,
    }
  }

  /**
   * @description Since the comparator value are not always string we need a value converter! 
   * @param {string} feature feature name
   * @param {string} value feature value
   * @returns {React.Component | String}
   */
  renderCompareValue(feature, value) {
    if (feature === FEATURE_BADGES) {
      return <Badges badges={value.split('|')} />;
    }

    return value;
  }

  render() {
    const { isProductsLoading, error } = this.props;

    if (isProductsLoading) {
      return <Spinner />
    } else if(error) {
      return <ErrorMessage message={error} />
    } else {
      return (<Zamro {...this.getFormattedProps()} renderCompareValue={this.renderCompareValue} />);
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
