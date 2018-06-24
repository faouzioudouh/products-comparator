import React from 'react';
import { mount } from 'enzyme';
import ProductContainer from '../../../src/components/Product';
import Product from '../../../src/components/Product/Product';
import wrapWithStore from '../../mocks/wrapWithStore';
import configureStore from '../../../src/store/configureStore';

jest.mock('../../../src/actions/compareActions', () => {
    const lib = require.requireActual('../../../src/actions/compareActions')

    return {
      ...lib,
      removeProductFromComparatorAction: jest.fn(lib.removeProductFromComparatorAction),
    }
});

import { removeProductFromComparatorAction } from '../../../src/actions/compareActions';


describe('component/ProductContainer', () => {
    const props = {
        sku: 'sku',
        name: 'product name',
        productImage: 'path/to/image',
        salePrice: '90',
    };

    const store = configureStore();
    const ProductContainerWithStore = wrapWithStore(store)(ProductContainer);

    it('should call the action on Remove button click', () => {
        const rendred = mount(<ProductContainerWithStore {...props} />);

        const product = rendred.find(Product);
        product.props().onClickHandler();

        expect(removeProductFromComparatorAction.mock.calls.length).toBe(1);
    });
});
