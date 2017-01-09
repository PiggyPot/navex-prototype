import React, {Component} from 'react';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../reducer';
import CardStack from './CardStack';


const appReducer = combineReducers(reducers);

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(appReducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <CardStack />
      </Provider>
    );
  }
}

export default App;
