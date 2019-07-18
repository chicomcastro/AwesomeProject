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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import console = require('console');

// const App = () => {

class AButton extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.
  // }
  state = {
    activated: true,
  }

  render() {
    return (
      <View>
        <Button
          title={this.props.activatedText}
          disabled={!this.state.activated}
          onPress={() => this.doFetch(this.props.url)}
        />
      </View>
    );
  }

  pressed() {
    this.doFetch();
  }

  doFetch() {

    let url = this.props.url;

    // desativa
    this.setState({ activated: false });

    fetch(url)
      .then(response => {//console.log(response);
        response.json()
          .then(jsonData => {
            // ativa
            this.setState({ activated: true });
            Alert.alert("Êxito!"); console.log(jsonData);
          })
          .catch(err => {
            // ativa
            this.setState({ activated: true });
            Alert.alert("Erro no json!");
          });
      })
      .catch(err => {
        // ativa
        this.setState({ activated: true });
        Alert.alert("Erro no fetch!");
      });
  }
}

class App extends React.Component {

  state = {
    isLoading: false,
  }

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
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits. I'VE EDITTED THIS!
              </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
                <AButton activatedText="Carregar" onPress={() => this.disableButton()} url="https://pokeapi.co/api/v2/item/126/"></AButton>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }

  disableButton() {
    this.setState({ activated: !this.state.activated });
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

export default App;
