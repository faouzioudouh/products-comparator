import React from 'react';
import classnames from 'classnames';
import Types from '../../../Types';
import { isAllItemsAreEqual } from '../../../helpers';
import './ComparatorLine.scss';

/**
 * @description ComparatorLine component renders the features and the values
 * @param {React.Props<Object>} props
 * @returns {React.Component} props
 */
const ComparatorLine =  ({
    propertyName,
    features,
    renderValue,
}) => {
    const classNames = classnames('ComparatorLine', {
        'ComparatorLine--highlight': !isAllItemsAreEqual(features.map(property => property.value)),
    });

    return (
        <div className={classNames}>
            <div className="ComparatorLine__feature-cell">{propertyName}</div>
                <div className="ComparatorLine__content">
                    {features.map(({ key, value }) =>
                        <div className="ComparatorLine__cell" key={key}>
                            {typeof renderValue === 'function' ? renderValue(propertyName, value) : value}
                        </div>
                    )}
            </div>
        </div>
    );
};

ComparatorLine.propTypes = {
    features: Types.arrayOf(Types.object),
    propertyName: Types.string.isRequired,
    renderValue: Types.func,
};

export default ComparatorLine;