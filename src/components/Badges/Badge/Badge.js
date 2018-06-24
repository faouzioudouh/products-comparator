import React from 'react';
import Types from '../../../Types';

import './Badge.scss';

const Badge =  ({
  imageUrl,
}) => (
    <div className="Badge">
        <img src={imageUrl} alt={`This shouldn't be emty !!`} className="Badge__image" />
    </div>
);

Badge.propTypes = {
    imageUrl: Types.string.isRequired,
};

export default Badge;