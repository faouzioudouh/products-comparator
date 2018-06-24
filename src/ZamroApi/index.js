import axios from 'axios';

class ZamroApi {
    constructor(config) {
        this.config = config;
    }

    /**
     * Get product by Ids (SKU)
     * @param {String[]} ids 
     */
    getProductsByIds(...ids) {
        const { BASE_URL, PRODUCTS_ENDPOINT } = this.config;
        return axios.get(BASE_URL + PRODUCTS_ENDPOINT.replace('{productsIds}', ids.join(',')));
    }
}

export default new ZamroApi(window.__API_CONFIG__);