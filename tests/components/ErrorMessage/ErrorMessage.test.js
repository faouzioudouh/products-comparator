import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '../../../src/components/ErrorMessage';

describe('component/ErrorMessage', () => {
    it('should render nothing if no message is given', () => {
        const rendred = shallow(<ErrorMessage  />);
        expect(rendred.isEmptyRender()).toBe(true)
    });

    it('should render the error message', () => {
        const FUNNY_GIF_NEVER_HURT_NOBODY = 'https://i.giphy.com/media/qQdL532ZANbjy/giphy.webp';

        const rendred = shallow(<ErrorMessage message="Be happy" />);
        expect(rendred.find('.ErrorMessage__message').exists()).toBe(true);
        expect(rendred.find('.ErrorMessage__message').text()).toBe('Be happy');
        expect(rendred.find('.ErrorMessage__gif').prop('src')).toBe(FUNNY_GIF_NEVER_HURT_NOBODY);
        expect(rendred.find('.ErrorMessage__gif').prop('alt')).toBe('Crying...');
    });
});
