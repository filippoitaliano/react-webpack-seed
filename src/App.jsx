import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import DemoMenu from './components/DemoMenu.jsx';
import DemoComponent from './components/DemoComponent.jsx';
import DemoHome from './components/DemoHome.jsx';

const App = () => (
  <HashRouter>
    <div className="demo-title">react-webpack-seed</div>

    <DemoMenu />
    
    <Routes>
      <Route
        path="demo-route"
        element={<DemoComponent />}
      />
      <Route
        path="/"
        element={<DemoHome />}
      />
    </Routes>
  </HashRouter>
);

export default App;
