import storeProvider from '../../src/hoc/storeProvider';

const wrapWithStore = store => (Component, initState = {}) => {
    return storeProvider(store)(Component);
};

export default wrapWithStore;