
import React from 'react';
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

import PokeList from '../../custom_components/PokeList.js'


export default class FavoritesScreen extends React.Component {

    getFavoriteData(obj) {
        // Get data from database

        // Update state
        obj.setState({
            isLoading: false,
        });
    }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <PokeList
                    // Necessary
                    navigation={this.props.navigation}
                    // Customized
                    loadList={(obj) => this.getFavoriteData(obj)}
                ></PokeList>
            </View>
        );
    }
}
