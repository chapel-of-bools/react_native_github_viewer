import { View, TabBarIOS, TabBarItemIOS } from 'react-native';
import React, { Component } from 'react';
import {connect } from 'react-redux';
import Home from '../Home'

class ApplicationTabs extends Component {

  renderScene(component) {
    return (
      <View> style={{flex: 1}}>
        { React.createElement(component, this.props) }
      </View>
    )
  }

  render() {
    return <TabBarIOS style={{flex: 1}}>
      <TabBarIOS.Item
        systemIcon="favorites"
        iconSize={25}>
        { this.renderScene(Home) }
      </TabBarIOS.Item>
      <TabBarIOS.Item
        systemIcon="more"
        iconSize={25}>
        { this.renderScene(Home) }
      </TabBarIOS.Item>
    </TabBarIOS>
  }
}

function mapStateToProps(state) {
  return {

  }
}
export default connect(mapStateToProps)(ApplicationTabs);
