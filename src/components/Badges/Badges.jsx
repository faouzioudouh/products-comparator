import React from 'react';
import Types from '../../Types';
import Badge from './Badge';

import './Badges.scss';

/**
 * @description Badges Component 
 * @param {React.Props<Object(Badge[])>} Props 
 * @returns {React.Component}
 */
const Badges =  ({
    badges,
}) => {
    if (!badges || !badges.length) {
        return null;
    }

    return (<React.Fragment>
        {badges.map(imageUrl => <Badge key={imageUrl} imageUrl={imageUrl} />)}
    </React.Fragment>);
};

Badges.propTypes = {
    badges: Types.arrayOf(Types.string.isRequired),
};

export default Badges;