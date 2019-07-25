/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import ReactNative from 'react-native';

import { createAppContainer, createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'

import ModalScreen from './src/screens/ModalScreen'

import FavoritesScreen from './src/screens/tabs/FavoritesScreen'
import PokeListScreen from './src/screens/tabs/PokeListScreen'
import PokeItensScreen from './src/screens/tabs/PokeItensScreen'

import { YellowBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RootStack = createStackNavigator(
  {
    Main: {
      screen: PokeListScreen,
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

const TabNavigator = createMaterialTopTabNavigator(
  {
    Favorites: { screen: FavoritesScreen },
    Pokemons: { screen: RootStack },
    Itens: { screen: PokeItensScreen },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
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
      title: 'myPokedex',

      headerLeft: (
        <ReactNative.View style={{ alignItems:'center', paddingLeft: 10 }}>
          <ReactNative.Image
            source={{ uri: 'https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png' }}
            style={{ width: 35, height: 35 }}
          />
        </ReactNative.View>
      ),
      headerRight: (
        <ReactNative.View style={{ alignContent: 'center', justifyContent: 'center', flexDirection: "row" }}>
          < ReactNative.TouchableWithoutFeedback onPress={() => ReactNative.Alert.alert('This is a lupa!')}>
            <ReactNative.View style={{ flex: 1, width: 50, alignItems:'center'  }}>
              <Icon size={25} style={{ color: '#fff' }}
                name="search"
              />
            </ReactNative.View>
          </ReactNative.TouchableWithoutFeedback>
          < ReactNative.TouchableWithoutFeedback onPress={() => ReactNative.Alert.alert('This is a reticencias!')}>
            <ReactNative.View style={{ flex: 1, width: 50, alignItems:'center' }}>
              <Icon size={25} style={{ color: '#fff' }}
                name="ellipsis-v"
              />
            </ReactNative.View>
          </ReactNative.TouchableWithoutFeedback>
        </ReactNative.View>
      ),
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(MainStack);

export default class App extends React.Component {
  render() {
    YellowBox.ignoreWarnings(['ViewPagerAndroid']);
    return <AppContainer />;
  }
}