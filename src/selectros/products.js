/**
 * @description Get all the products that match the geivn Sku's! 
 * @param {Object} state
 * @param {String[]} skus
 * @returns {Array} Matched products
 */
export const getProductsBySky = state => (...skus) =>
    state.products.items
        .filter(product => skus.includes(product.sku))