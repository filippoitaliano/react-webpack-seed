import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import DemoMenu from './components/DemoMenu.jsx';
import DemoComponent from './components/DemoComponent.jsx';
import DemoHome from './components/DemoHome.jsx';

const App = () => (
  <HashRouter>
    <div className="demo-title">react-webpack-seed</div>

    <DemoMenu />
    
    <Switch>
      <Route
        path="/demo-route"
        component={DemoComponent}
      />
      <Route 
        component={DemoHome}
      />
    </Switch>
  </HashRouter>
);

export default App;
