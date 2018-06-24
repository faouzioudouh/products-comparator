import React from 'react';
import { shallow } from 'enzyme';
import ComparatorFilter from '../../../src/components/ComparatorFilter/ComparatorFilter';
import ComparatorFilterItem from '../../../src/components/ComparatorFilter/ComparatorFilterItem';

describe('component/ComparatorFilter', () => {
    const onChangeMock = jest.fn();
    const props = {
        products: [{ sku: 'test1' }, { sku: 'test2' }],
        productsToCompare: [{ sku: 'test1' }],
        onFilterChange: jest.fn(() => onChangeMock),
    };

    it('should render the correct blocks', () => {
        const rendred = shallow(<ComparatorFilter {...props} />);
        expect(rendred.find('.ComparatorFilter__title').text()).toBe('Je Selectie');
    });

    it('should render ComparatorFilterItem with the correct props', () => {
        const rendred = shallow(<ComparatorFilter {...props} />);
        expect(rendred.find(ComparatorFilterItem).length).toBe(2);

        expect(rendred.find(ComparatorFilterItem).at(0).prop('isSelected')).toBe(true);
        expect(rendred.find(ComparatorFilterItem).at(1).prop('isSelected')).toBe(false);
    });

    it('should call onFilterChange', () => {
        const rendred = shallow(<ComparatorFilter {...props} />);
        rendred.find(ComparatorFilterItem).at(1).prop('onChange')();

        expect(onChangeMock).toBeCalled();
    });
});
