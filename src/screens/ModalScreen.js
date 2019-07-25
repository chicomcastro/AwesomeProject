
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
    

    doFetch() {

        let url = this.props.url;

        // desativa
        this.props.loadingEvent(true);

        fetch(url)
            .then(response => {//console.log(response);
                response.json()
                    .then(jsonData => {
                        // ativa
                        this.props.navigationEvent();
                        this.props.loadingEvent(false);
                        //Alert.alert("Êxito!"); console.log(jsonData);
                    })
                    .catch(err => {
                        // ativa
                        this.props.loadingEvent();
                        Alert.alert("Erro no json!");
                    });
            })
            .catch(err => {
                // ativa
                this.props.loadingEvent();
                Alert.alert("Erro no fetch!");
            });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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