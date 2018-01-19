import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import LoginPage from './src/pages/login-page/login-page';
import ProfilePage from './src/pages/profile-page/profile-page';
import OrderPage from './src/pages/order-page/order-page';

import{TabNavigator} from'react-navigation';

export default class firstReactNativeProject extends Component {
  
  render(){
    return <App/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  firstContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  secondContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('firstReactNativeProject', () => firstReactNativeProject);



const App = TabNavigator({
  Profile: {screen: ProfilePage},
  Order:{screen: OrderPage},
});