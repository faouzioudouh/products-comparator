import React from "react";
import ReactDOM from "react-dom";

import storeProvider from './hoc/storeProvider';
import configureStore from './store/configureStore';

// --- Root component ---
import Zamro from './components/Zamro';

// --- Common styles ---
import './scss/common.scss';

// --- Configure the store ---
const initialState = {};
const store = configureStore(initialState);
const provideStore = storeProvider(store);
const ZamroWithStore = provideStore(Zamro);
// The config should be
const __APP_CONFIG__ = window.__APP_CONFIG__;

ReactDOM.render(<ZamroWithStore {...__APP_CONFIG__} />, document.getElementById("root"));
