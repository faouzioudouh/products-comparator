import PropTypes from 'prop-types';

export default PropTypes.shape({
  Artikelnummer: PropTypes.string,
  BUP_Conversion: PropTypes.string,
  BUP_UOM: PropTypes.string,
  BUP_Value: PropTypes.string,
  Hardheid: PropTypes.string,
  'Inwendige diameter': PropTypes.string,
  Kleur: PropTypes.string,
  'Maat volgens AS568': PropTypes.string,
  Materiaal: PropTypes.string,
  Snoerdikte: PropTypes.string,
  Temperatuurgebied: PropTypes.string,
  Toepassing: PropTypes.string,
  atp: PropTypes.object,
  badges: PropTypes.string,
  channel: PropTypes.string,
  display: PropTypes.bool,
  grossPrice: PropTypes.string,
  listPrice: PropTypes.string,
  manufacturerImage: PropTypes.string,
  manufacturerName: PropTypes.string,
  minQuantity: PropTypes.string,
  name: PropTypes.string,
  productImage: PropTypes.string,
  salePrice: PropTypes.string,
  sku: PropTypes.string,
  stepQuantity: PropTypes.string,
  uom: PropTypes.string,
});
