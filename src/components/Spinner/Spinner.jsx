import React from 'react';

import "./Spinner.scss";

const FUNNY_GIF_NEVER_HURT_NOBODY = 'https://i.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.webp';

const Spinner =  () => {
    return (
      <div className="Spinner">
        <img src={FUNNY_GIF_NEVER_HURT_NOBODY} alt="spinner" className="Spinner__image"/>
      </div>
    );
};

export default Spinner;