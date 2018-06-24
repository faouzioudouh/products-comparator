/**
 * @description Render product badges as images! 
 * @param {string} badges separated by '|'
 * @returns {React.Component} Badges Component
 */
export const getFeaturesFromProducts = products => feature => 
    products
        .map(product => ({
            value: product[feature],
            key: product.sku,
        }));

/**
 * @description Sort Alphabetically and keep badges always on top! 
 * @param {String[]} features
 * @returns {String[]} sorted features
 */
export const sortFeaturesAlphabetically = features =>
    features
        .sort((one, two) => {
            const oneLowerCase = one.toLowerCase();
            const twoLowerCase = two.toLowerCase();

            if(oneLowerCase < twoLowerCase) return -1;
            if(oneLowerCase > twoLowerCase) return 1;

            return 0;        
        })

/**
 * @description Move an item of an array to the front! 
 * @param {Array} features
 * @returns {Array} sorted features
 */
export const moveItemToFront = array => item => {
    const index = array.indexOf(item);

    if (index === -1) {
        return array;
    }

    array.splice(index, 1);
    array.unshift(item);

    return [...array];
}

/**
 * Return true if all the array itens are strictely equal!
 * @param {String[]} items
 * @returns {Boolean}
 */
export const isAllItemsAreEqual = items => {
    const firstItem = items.pop();
    return items.every(item => item === firstItem);
};
