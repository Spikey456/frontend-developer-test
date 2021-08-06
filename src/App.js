import React, { Component } from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './services/redux/reducers';
import './modules/assets/global.scss';
import thunk from 'redux-thunk';
import Routes from './services/routes';
import stores from './services/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const {store, persistor} = stores()
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: undefined,
    };
    this.store = createStore(reducers, {},applyMiddleware(thunk))
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Routes />
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
