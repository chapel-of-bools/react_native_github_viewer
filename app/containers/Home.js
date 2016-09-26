import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import {
  NavigatorIOS,
  StyleSheet,
  Text,
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
    fontSize: 20,
    textAlign: 'center'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 150,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
    image: {
    marginTop: 25,
    marginBottom: 25,
    width: 150,
    height: 150,
    padding: 10,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 75
  },
  textInput: {
    textAlign: 'center',
    height: 40,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 20
  }
}

class Home extends Component {
  searchPressed() {
    this.props.fetchRepos('mrscott90')
  }

  render() {
    return <View style={styles.container}>
      <Text style={styles.text}>Search For Repositories!</Text>
      <Image source={require('../../resources/logo.png')} style={styles.image}/>
      <TextInput
        style={styles.textInput}
        placeholder="Enter A Github Username"
      />
      <TouchableHighlight style={styles.button}
        underlayColor='#99d9f4'
        onPress={ () => this.searchPressed() }>
          <Text style={styles.buttonText}>Search</Text>
      </TouchableHighlight>
  </View>
  }
}

function mapStateToProps(state) {
  return {
    searchedRepos: state.searchedRepos
  }
}

export default connect(mapStateToProps)(Home);
