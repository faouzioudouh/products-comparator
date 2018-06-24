import React from 'react';
import { shallow } from 'enzyme';
import ComparatorFilterItem from '../../../src/components/ComparatorFilter/ComparatorFilterItem';

describe('component/ComparatorFilterItem', () => {
    const props = {
        sku: 'sku',
        name: 'product name',
        isSelected: false,
        onChange: jest.fn(),
    };

    it('should render the the input and the block', () => {
        const rendred = shallow(<ComparatorFilterItem {...props} />);
        expect(rendred.find('.ComparatorFilterItem__checkbox').prop('checked')).toBe(false);
        expect(rendred.find('.ComparatorFilterItem__checkbox').prop('id')).toBe('ComparatorFilterItem_sku');
        expect(rendred.find('.ComparatorFilterItem__checkbox-label').prop('htmlFor')).toBe('ComparatorFilterItem_sku');
    });

    it('should call onChange function on input change', () => {
        const rendred = shallow(<ComparatorFilterItem {...props} />);
        rendred.find('.ComparatorFilterItem__checkbox').simulate('change');

        expect(props.onChange.mock.calls.length).toBe(1);
    });
});
