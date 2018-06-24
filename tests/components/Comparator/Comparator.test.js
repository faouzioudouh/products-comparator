import React from 'react';
import { shallow } from 'enzyme';
import Comparator from '../../../src/components/Comparator';
import Product from '../../../src/components/Product';
import ComparatorFilter from '../../../src/components/ComparatorFilter';
import ComparatorLine from '../../../src/components/Comparator/ComparatorLine';

describe('component/Comparator', () => {
    const props = {
        products: [{ sku: 'test1' }, { sku: 'test2' }],
        productsToCompare: [{ sku: 'test1' }],
        featuresToCompare: ['quality', 'color'],
        renderCompareValue: jest.fn(),
    };

    it('should render the Products with correct props', () => {
        const rendred = shallow(<Comparator {...props} />);
        expect(rendred.find(Product).length).toBe(1);
        expect(rendred.find(Product).props()).toEqual(props.productsToCompare[0]);
    });

    it('should render the ComparatorFilter with correct props', () => {
        const rendred = shallow(<Comparator {...props} />);
        expect(rendred.find(ComparatorFilter).length).toBe(1);
        expect(rendred.find(ComparatorFilter).prop('products')).toEqual(props.products);
        expect(rendred.find(ComparatorFilter).prop('productsToCompare')).toEqual(props.productsToCompare);
    });

    it('should render the ComparatorLine with correct props', () => {
        const rendred = shallow(<Comparator {...props} />);
        expect(rendred.find(ComparatorLine).length).toBe(2);
        expect(rendred.find(ComparatorLine).at(0).prop('propertyName')).toBe('quality');
        expect(rendred.find(ComparatorLine).at(0).key()).toBe('quality');

        expect(rendred.find(ComparatorLine).at(1).prop('propertyName')).toBe('color');
        expect(rendred.find(ComparatorLine).at(1).key()).toBe('color');
    });
});
