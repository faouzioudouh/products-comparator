import React from 'react';
import Types from '../../Types';

import "./ErrorMessage.scss";

const FUNNY_GIF_NEVER_HURT_NOBODY = 'https://i.giphy.com/media/qQdL532ZANbjy/giphy.webp';

/**
 * @description ErrorMessage Component renders error message!
 * @param {React.Props<Object>} Props 
 * @returns {React.Component}
 */
const ErrorMessage =  ({
    message
}) => {
    if (!message) {
        return null;
    }

    return (
      <div className="ErrorMessage">
        <img src={FUNNY_GIF_NEVER_HURT_NOBODY} alt="Crying..." className="ErrorMessage__gif" />
        <span className="ErrorMessage__message">{message}</span>
      </div>
    );
};

ErrorMessage.propTypes = {
    message: Types.string.isRequired,
};

export default ErrorMessage;