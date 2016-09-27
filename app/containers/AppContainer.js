import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import ApplicationTabs from './ApplicationTabs';

import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental,
} from 'react-native';

const {
  Card: NavigationCard,
  Transitioner: NavigationTransitioner
} = NavigationExperimental

const {
  PagerStyleInterpolator: NavigationPagerStyleInterpolator
} = NavigationCard

class AppContainer extends Component {
  render() {
    console.log(this.props);
    return <NavigationTransitioner
      navigationState={this.props.navigationState}
      render={this._render}
      />
  }

  _render() {
    return <ApplicationTabs {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
