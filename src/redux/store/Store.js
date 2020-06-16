import { createStore, combineReducers } from 'redux';

import Amiibos from '../reducers/Amiibos';
import SearchAmiibos from '../reducers/SearchAmiibos';

const reducers = combineReducers({
    amiibos: Amiibos,
    searchAmiibo: SearchAmiibos
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, devtools);

export default store;