
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Alert,
  FlatList, ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { Button, ThemeProvider } from 'react-native-elements';


export default class ModalScreen extends React.Component {

  state = {
    isLoading: true,
    dataSource: [],
    error: '',
  };

  componentDidMount() {
    // Verificar se possui acesso a esse url
    alert(this.props.navigation.state.params.url);
  }

  loadingEvent(newState = false) {
    this.setState({ isLoading: newState });
  }

  doFetch() {
    let url = this.props.navigation.state.params.url;

    // desativa
    this.loadingEvent(true);

    fetch(url)
      .then(response => {
        response.json()
          .then(jsonData => {
            this.loadingEvent(false);
            console.log(jsonData);
          })
          .catch(err => {
            this.loadingEvent();
            Alert.alert("Erro no json!");
            console.log(err);
          });
      })
      .catch(err => {
        this.loadingEvent();
        Alert.alert("Erro no fetch!");
        console.log(err);
      });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <ActivityIndicator />
      )
    }

    return (
      <View style={{ flex: 1, }}>
        <Text>Pokemon sprite</Text>
        <Text>Star sprite</Text>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
};

import ViewPager from "@react-native-community/viewpager";

export class MyPager extends React.Component {
  render() {
    return (
      <ViewPager
        style={styles.viewPager}
        initialPage={0}>
        <View key="1">
          <Text>First page</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
      </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
})