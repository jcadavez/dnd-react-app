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

import { SingleRacePage } from './features/race/SingleRacePage'
import { SingleClassPage } from './features/class/SingleClassPage'
import { SingleTraitPage } from './features/trait/SingleTraitPage'

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
                <div class="flexbox-container">
                  <ClassList />
                  <RaceList />
                  <TraitList />
                </div>
              </React.Fragment>
            )}
          />
          <Route exact path="/races/:raceUrl" component={SingleRacePage} />
          <Route exact path="/classes/:classUrl" component={SingleClassPage} />
          <Route exact path="/traits/:traitUrl" component={SingleTraitPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
