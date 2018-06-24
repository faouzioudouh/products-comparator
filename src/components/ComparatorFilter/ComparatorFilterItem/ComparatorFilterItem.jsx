
import React from 'react';
import Types from '../../../Types';

import "./ComparatorFilterItem.scss";

/**
 * @description ComparatorFilterItem renders the filet item (checbox and label)!
 * @param {React.Props<Object>} Props 
 * @returns {React.Component}
 */
const ComparatorFilterItem =  ({
    sku,
    name,
    isSelected,
    onChange,
}) => {
    const inputId = `ComparatorFilterItem_${sku}`;

    return (
      <div className="ComparatorFilterItem">
        <input type="checkbox" id={inputId} className="ComparatorFilterItem__checkbox" onChange={onChange} checked={isSelected} />
        <label className="ComparatorFilterItem__checkbox-label" htmlFor={inputId}>
            {name}
        </label>
      </div>
    );
};

ComparatorFilterItem.propTypes = {
    sku: Types.string.isRequired,
    name: Types.string.isRequired,
    isSelected: Types.bool,
    onChange: Types.func.isRequired,
};

export default ComparatorFilterItem;