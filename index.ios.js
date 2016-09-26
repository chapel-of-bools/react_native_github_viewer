'use strict';
import React, { Component } from 'react';
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

class GithubViewerApp extends Component {
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

AppRegistry.registerComponent('GithubViewer', () => GithubViewerApp);
