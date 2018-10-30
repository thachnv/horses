import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import mainReducer from './main-reducer';
import Auth from './modules/Auth';

const mainStore = createStore(mainReducer);

class App extends Component {
  render() {
    return (
      <Provider store={mainStore}>
        <div className="App">
          <Auth />
        </div>
      </Provider>
    );
  }
}

export default App;
