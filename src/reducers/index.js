import { combineReducers } from 'redux';

// --- reducers ---
import products from './products';
import comparator from './comparator';

export default combineReducers({
    products,
    comparator
});
