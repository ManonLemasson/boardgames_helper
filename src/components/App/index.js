// == Import npm
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// == Import
import './style.scss';

import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Ohanami from 'src/components/Ohanami';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/ohanami" exact>
        <Ohanami />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
