/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { createAppContainer, createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'

import HomeScreen from './src/screens/HomeScreen'
import ContentScreen from './src/screens/ContentScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import ModalScreen from './src/screens/ModalScreen'

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: { screen: HomeScreen },
    Root: { screen: DetailsScreen },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      style: {
        backgroundColor: '#f4511e',
      },
      activeTintColor: '#ddd',
      inactiveTintColor: '#fff',
    },
  }
)

const MainStack = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
}, {
    initialRouteName: 'Home',
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
      screen: ContentScreen,
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


const AppContainer = createAppContainer(MainStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}