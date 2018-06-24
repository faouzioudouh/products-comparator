import React from 'react';

import "./Spinner.scss";

const FUNNY_GIF_NEVER_HURT_NOBODY = 'https://i.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.webp';

/**
 * @description Spinner renders a loading indicator (gif)!
 * @param {React.Props<{}>} Props Expecting no props 
 * @returns {React.Component}
 */
const Spinner =  () => {
    return (
      <div className="Spinner">
        <img src={FUNNY_GIF_NEVER_HURT_NOBODY} alt="Loading..." className="Spinner__image"/>
      </div>
    );
};

export default Spinner;