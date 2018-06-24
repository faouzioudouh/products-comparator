import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../src/components/Spinner';

describe('component/Spinner', () => {
    it('should render the spinner gif', () => {
        const FUNNY_GIF_NEVER_HURT_NOBODY = 'https://i.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.webp';

        const rendred = shallow(<Spinner />);
        expect(rendred.find('.Spinner__image').prop('src')).toBe(FUNNY_GIF_NEVER_HURT_NOBODY);
        expect(rendred.find('.Spinner__image').prop('alt')).toBe('Loading...');
    });
});
