import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import './App.css';

import { Navbar } from './app/Navbar'

import { ClassList } from './features/class/ClassList'
import { RaceList } from './features/race/RaceList'
import { TraitList } from './features/trait/TraitList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route 
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <ClassList />
                <RaceList />
                <TraitList />
              </React.Fragment>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
