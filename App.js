/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  FlatList, ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'

//#region Introduction to React-Native section
class AButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activated: true,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.pressed()}
        >
          <Text> {this.props.activatedText} </Text>
        </TouchableOpacity>
      </View>
    );
  }

  pressed() {
    this.doFetch();
  }

  doFetch() {

    let url = this.props.url;

    // desativa
    this.props.onPress();

    fetch(url)
      .then(response => {//console.log(response);
        response.json()
          .then(jsonData => {
            // ativa
            this.props.onPress();
            Alert.alert("Êxito!"); console.log(jsonData);
          })
          .catch(err => {
            // ativa
            this.props.onPress();
            Alert.alert("Erro no json!");
          });
      })
      .catch(err => {
        // ativa
        this.props.onPress();
        Alert.alert("Erro no fetch!");
      });
  }
}

class PokeList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {                                 // Component has just been mounted
    return fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => this.renderListButton(item.name, item.url)}
          keyExtractor={(item) => item.url}
        />
      </View>
    );
  }

  renderListButton(name, url) {
    return (
      <AButton activatedText={name} url={url} onPress={() => this.setListLoadingStatus()}></AButton> // 
    )
  }

  setListLoadingStatus() {
    this.setState({ isLoading: !this.state.isLoading });
  }
}

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Pokemons</Text>
                <Text style={styles.sectionDescription}>
                  Navigate to see your favorite pokemon's infos.
              </Text>
              </View>
              <View style={styles.sectionContainer}>
                <PokeList></PokeList>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;

//#endregion 

//#region React-native-navigation
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
//#endregion
