export default {
    // Assuming that all the config is provided by the backend.

    __API_CONFIG__: {
        BASE_URL: 'https://www.zamro.nl/actions/',
        PRODUCTS_ENDPOINT: 'ViewProduct-ProductCompare?SKU={productsIds}',
    },
    __APP_CONFIG__: {
        productsIds: [
          '115E19',
          '11545A',
          '115E1A',
          '115576',
        ],
        featuresToCompare: [
          'Artikelnummer',
          'Hardheid',
          'Inwendige diameter',
          'Kleur',
          'Maat volgens AS568',
          'Materiaal',
          'Snoerdikte',
          'Temperatuurgebied',
          'Toepassing',
          'badges',
          'stepQuantity',
        ]
    }
}