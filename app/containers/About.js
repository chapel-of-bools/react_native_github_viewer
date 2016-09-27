import React, { Component } from 'react';
import ReactNative from 'react-native';
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native'

var styles = {
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  image: {
    marginTop: 5,
    marginBottom: 5,
    width: 150,
    height: 150,
    padding: 2,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 75,
    alignSelf: 'center'
  },
}

export default class About extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>About</Text>
      </View>
    )
  }
}
