/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import Store from './src/stores'
import Home from './src/screens/Home'
import Mango from './src/screens/Mango'
import Test from './src/screens/Test'

const AppNavigator = StackNavigator({
  MangoScreen: { screen: Mango },
  HomeScreen: { screen: Home },
  Test: {screen: Test}
})

export default class mangoTree extends Component {
  render() {
    return (
      <Provider store={ Store }>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('mangoTree', () => mangoTree);
