import React from 'react';
import { shallow } from 'enzyme';
import Product from '../../../src/components/Product/Product';

describe('component/Product', () => {
    const props = {
        name: 'product name',
        productImage: 'path/to/image',
        salePrice: '90',
        onClickHandler: jest.fn(),
    };

    it('should render the blocks', () => {
        const rendred = shallow(<Product {...props} />);

        expect(rendred.find('.Product__remove-button').prop('onClick')).toBe(props.onClickHandler);
        expect(rendred.find('.Product__remove-button').text()).toBe('Remove');

        expect(rendred.find('.Product__image').prop('src')).toBe('path/to/image');
        expect(rendred.find('.Product__image').prop('alt')).toBe('product name');

        expect(rendred.find('.Product__name').text()).toBe('product name');

        expect(rendred.find('.Product__price').text()).toBe('90');

        expect(rendred.find('.Product__price-label').text()).toBe('Per stuck / excl. btw');
    });

    it('should call onClickHandler function on button click', () => {
        const rendred = shallow(<Product {...props} />);

        rendred.find('.Product__remove-button').simulate('click');
        expect(props.onClickHandler.mock.calls.length).toBe(1);
    });
});
