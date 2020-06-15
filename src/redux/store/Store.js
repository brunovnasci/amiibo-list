import { createStore, combineReducers } from 'redux';

import Amiibos from '../reducers/Amiibos';

const reducers = combineReducers({
    amiibos: Amiibos
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, devtools);

export default store;