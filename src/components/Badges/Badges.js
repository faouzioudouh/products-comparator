import React from 'react';
import Types from '../../Types';
import Badge from './Badge';

import './Badges.scss';

const Badges =  ({
    badges,
}) => (
    <React.Fragment>
        {badges.map(imageUrl => <Badge key={imageUrl} imageUrl={imageUrl} />)}
    </React.Fragment>
);

Badges.propTypes = {
    badges: Types.arrayOf(Types.string.isRequired),
};

export default Badges;