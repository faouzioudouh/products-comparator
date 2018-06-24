import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import ZamroContainer from '../../../src/components/Zamro';
import Zamro from '../../../src/components/Zamro/Zamro';
import Spinner from '../../../src/components/Spinner';
import ErrorMessage from '../../../src/components/ErrorMessage';
import wrapWithStore from '../../mocks/wrapWithStore';
import configureStore from '../../../src/store/configureStore';
// import { loadProductsFailure } from '../../../src/actions/productActions';

jest.mock('axios');

describe('component/ZamroContainer', () => {
    const productData = {
        sku: 'test',
        name: 'name',
        productImage: 'productImage',
        salePrice: '90',
        quality: 5
    };

    const props = {
        productsIds: ['test'],
        featuresToCompare: ['quality'],
    };

    const store = configureStore();
    const ZamroContainerWithStore = wrapWithStore(store)(ZamroContainer);

    it('should render the Spinner', () => {
        const resp = { data: { products: [productData] }};
        axios.get.mockResolvedValueOnce(resp);

        const rendred = mount(<ZamroContainerWithStore {...props} />);

        expect(rendred.find(Spinner).exists()).toBe(true);
    });

    it('should render the ErrorMessage', async (done) => {
        axios.get.mockRejectedValueOnce(new Error('Network Error'));
        const rendred = mount(<ZamroContainerWithStore {...props} />);

        await new Promise((resolve) => setTimeout(resolve, 1));
        rendred.update();
        expect(rendred.find(ErrorMessage).exists()).toBe(true);
        expect(rendred.find(ErrorMessage).prop('message')).toBe('Network Error');

        done();
    });

    it('should render Zamro component', async () => {
        const resp = { data: { products: [productData] }};
        axios.get.mockResolvedValueOnce(resp);
        const rendred = mount(<ZamroContainerWithStore {...props} />);

        await new Promise((resolve) => setTimeout(resolve, 100));
        rendred.update();

        expect(rendred.find(Zamro).exists()).toBe(true);
        expect(rendred.find(Zamro).prop('products')).toEqual(resp.data.products);
        expect(rendred.find(Zamro).prop('productsToCompare')).toEqual(resp.data.products);
    });
});
