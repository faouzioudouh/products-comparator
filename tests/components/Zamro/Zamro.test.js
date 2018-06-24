import React from 'react';
import { shallow } from 'enzyme';
import Zamro from '../../../src/components/Zamro/Zamro';
import Comparator from '../../../src/components/Comparator';

describe('component/Zamro', () => {
    const productData = {
        sku: 'test',
        quality: 5
    };

    const props = {
        products: [productData],
        productsToCompare: [productData],
        featuresToCompare: ['quality'],
        renderCompareValue: jest.fn(),
    };

    it('should render the title', () => {
        const rendred = shallow(<Zamro {...props} />);

        expect(rendred.find('h1.Zamro__title').text()).toBe('1 producten vergeliken');
    });

    it('should render the Comparator with the correct props', () => {
        const rendred = shallow(<Zamro {...props} />);

        expect(rendred.find(Comparator).exists()).toBe(true);
        expect(rendred.find(Comparator).props()).toEqual(props);
    });
});
