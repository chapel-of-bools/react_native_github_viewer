import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import {
  NavigatorIOS,
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
    flex: 1,
    padding: 10,
    marginTop: 30,
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
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  scrollSection: {
    flex: 0.8
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { searching: false, usernameInput: '' }
  }

  searchPressed() {
    this.setState({searching: true});
    this.props.fetchRepos(this.state.usernameInput).then( () => {
      this.setState({searching: false});
    });
  }

  repos() {
    return Object.keys(this.props.searchedRepos).map( key => this.props.searchedRepos[key] )
  }

  render() {
    // console.log(this.repos());
    return <View style={styles.container}>
      <View>
      <Text style={styles.text}>Search For Repositories!</Text>
      <Image source={require('../../resources/logo.png')} style={styles.image}/>
      <TextInput
        style={styles.textInput}
        placeholder="Enter A Github Username"
        returnKeyType="search"
        onChangeText={ (usernameInput) => this.setState({usernameInput}) }
        value={this.state.usernameInput}
      />
      <TouchableHighlight style={styles.button}
        underlayColor='#99d9f4'
        onPress={ () => this.searchPressed() }>
          <Text style={styles.buttonText}>Search</Text>
      </TouchableHighlight>
      </View>
      <ScrollView style={styles.scrollSection}>
        {!this.state.searching && this.repos().map((repo) => {
          return <View key={repo.id}>
            <Text style={styles.resultText}>{repo.name}</Text>
          </View>
        })}
        { this.state.searching ? <Text>Searching...</Text> : null }
      </ScrollView>
  </View>
  }
}

function mapStateToProps(state) {
  return {
    searchedRepos: state.searchedRepos
  }
}

export default connect(mapStateToProps)(Home);
