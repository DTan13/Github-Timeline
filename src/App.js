import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import './App.css';
import './Styles';

import ComingSoon from './components/comingSoon';
import Home from './pages/Home';
import Data from './pages/Data';
import Projects from './pages/Projects';
import Layout from './components/layout';

class App extends React.Component {
  state = {
    user: ''
  };

  setUser = val => {
    this.setState({
      user: val
    }
    );
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <ComingSoon /> */}
          <Layout user={this.state.user}>
            <Switch>
              <Route exact path='/home' render={() => <Home user={this.state.user} />} />
              <Route exact path='/projects' render={() => <Projects user={this.state.user} />} />
              <Route path='/:id' render={() => <Data user={this.state.user} setUser={(val) => { this.setUser(val); }} />} />
              <Route path='/' render={() => <Data user={this.state.user} setUser={(val) => { this.setUser(val); }} />} />
              <Redirect to='/' />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
