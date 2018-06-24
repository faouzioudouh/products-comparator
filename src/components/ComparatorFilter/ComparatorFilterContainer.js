import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';

import Types from '../../Types';
import ComparatorFilter from './ComparatorFilter';
import { addProductsToComparatorAction, removeProductFromComparatorAction } from '../../actions/compareActions';

class ComparatorFilterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange(productId) {
        return event => {
            if (event.target.checked) {
                this.props.addProductsToComparator(productId);
            } else {
                this.props.removeProductFromComparator(productId);
            }
        };
    }

    render() {    
        return (<ComparatorFilter {...this.props} onFilterChange={this.onFilterChange} />);
    }
}

ComparatorFilterContainer.propTypes = {
    addProductsToComparator: Types.func,
    removeProductFromComparator: Types.func,
};

const mapDispatchToProps = dispatch => ({
    addProductsToComparator: productId => compose(dispatch, addProductsToComparatorAction)(productId),
    removeProductFromComparator: productId => compose(dispatch, removeProductFromComparatorAction)(productId),
});

export default connect(null, mapDispatchToProps)(ComparatorFilterContainer);
