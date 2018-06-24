import React from 'react';
import Types from '../../../Types';

import './Badge.scss';

/**
 * @description Bage Component 
 * @param {React.Props<Object>} Props 
 * @returns {React.Component}
 */
const Badge =  ({
  imageUrl,
}) => {
    if (!imageUrl) {
        return null;
    }

    return (
        <div className="Badge">
                <img src={imageUrl} alt={`This shouldn't be emty !!`} className="Badge__image" />
        </div>
    );
};

Badge.propTypes = {
    imageUrl: Types.string.isRequired,
};

export default Badge;