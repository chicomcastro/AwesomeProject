/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/HomeScreen'
import ContentScreen from './src/screens/ContentScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import ModalScreen from './src/screens/ModalScreen'

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Content: {
    screen: ContentScreen,
  },
}, {
    initialRouteName: 'Content',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}