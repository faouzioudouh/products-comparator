import React from 'react';
import { shallow } from 'enzyme';
import Badges from '../../../src/components/Badges';
import Badge from '../../../src/components/Badges/Badge';

describe('component/Badges', () => {
    it('should render nothing if no badges is given', () => {
        const rendred = shallow(<Badges  />);
        expect(rendred.isEmptyRender()).toBe(true)
    });

    it('should render nothing if empty array of badges is given', () => {
        const rendred = shallow(<Badges badges={[]} />);
        expect(rendred.isEmptyRender()).toBe(true)
    });

    it('should render the Badges', () => {
        const badges = ['if/you/go/away', 'in/this/summer/day'];
        const rendred = shallow(<Badges badges={badges} />);

        expect(rendred.find(Badge).length).toBe(2);
    });
});
