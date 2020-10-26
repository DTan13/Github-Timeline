import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import './App.css';
import './Styles';

import ComingSoon from './components/comingSoon';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <ComingSoon /> */}
        <Switch>
          <Route path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
