import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import DemoMenu from './components/DemoMenu';
import DemoComponent from './components/DemoComponent';
import DemoHome from './components/DemoHome';

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
