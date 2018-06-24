import React from 'react';
import { shallow } from 'enzyme';
import Badge from '../../../src/components/Badges/Badge';

describe('component/Badges/Badge', () => {
    it('should render nothing if no imageUrl', () => {
        const rendred = shallow(<Badge  />);
        expect(rendred.isEmptyRender()).toBe(true)
    });

    it('should render the image element if imageUrl exists', () => {
        const rendred = shallow(<Badge imageUrl="if/you/go/away" />);

        expect(rendred.find('img').exists()).toBe(true);
        expect(rendred.find('img').prop('alt')).toBe(`This shouldn't be emty !!`);
        expect(rendred.find('img').hasClass('Badge__image')).toBe(true);
    });
});
