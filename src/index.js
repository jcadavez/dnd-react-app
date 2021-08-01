import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './app/store'
import { Provider } from 'react-redux'

import { fetchClasses } from './features/class/classSlice'
import { fetchRaces } from './features/race/raceSlice'
import { fetchTraits } from './features/trait/traitSlice'

store.dispatch(fetchClasses())
store.dispatch(fetchRaces())
store.dispatch(fetchTraits())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

