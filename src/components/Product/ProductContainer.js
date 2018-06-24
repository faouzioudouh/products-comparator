import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';

import Types from '../../Types';
import Product from './Product';
import { removeProductFromComparatorAction } from '../../actions/compareActions';

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
      this.props.removeProductFromComparator(this.props.sku);
    }

    render() {    
        return (<Product {...this.props} onClickHandler={this.onClickHandler} />);
    }
}

ProductContainer.propTypes = {
    removeProductFromComparator: Types.func,
};

const mapDispatchToProps = dispatch => ({
    removeProductFromComparator: productId => compose(dispatch, removeProductFromComparatorAction)(productId),
});

export default connect(null, mapDispatchToProps)(ProductContainer);
