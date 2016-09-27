import React, { Component } from 'react';
import ReactNative from 'react-native';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

export default class Detail extends Component {

  render() {
    return <View>
        <Text style={{marginTop: 20}}>Detail</Text>
      </View>
  }
}
