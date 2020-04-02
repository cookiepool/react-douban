import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router/router';

import PreLoading from './components/preLoading/PreLoading';

function App() {
  return (
    <Router>
      <Switch>
      <React.Suspense fallback={ <PreLoading />}>
        { renderRoutes(routes) }
      </React.Suspense>
      </Switch>
    </Router>
  );
}

export default App;
