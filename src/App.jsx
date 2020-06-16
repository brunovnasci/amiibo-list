import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Amiibos from './pages/Amiibos/Amiibos';
import AmiiboDetails from './pages/Amiibos/AmiiboDetails/AmiiboDetails';
import FindAmiibos from './pages/Amiibos/FindAmiibos/FindAmiibos';

import history from './services/history';
import ROUTES from './routes/Routes';

import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ALL_AMIIBOS} component={Amiibos} />
          <Route exact path={ROUTES.AMIIBO_DETAILS} component={AmiiboDetails} />
          <Route exact path={ROUTES.FIND_AMIIBOS} component={FindAmiibos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;