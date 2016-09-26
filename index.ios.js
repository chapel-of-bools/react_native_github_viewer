'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineRedduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './app/reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Home = require('./Home');

var styles = {
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
}

class GithubViewer extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Viewer',
          component: Home
        }}/>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <GithubViewer />
  </Provider>
)

AppRegistry.registerComponent('GithubViewer', () => App);
