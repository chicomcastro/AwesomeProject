
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

    
    state = {
        isLoading: true,
        dataSource: [],
    };

    getFavoriteData() {
        // Get data from database

        // Update state
        this.setState({
            isLoading: false,
        });
    }

    componentDidMount() {
        return this.getFavoriteData();
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
                <PokeList
                    navigationEvent={(url) => {
                        this.props.navigation.navigate(
                            { routeName: 'MyModal', url: url  },
                        )
                    }}
                    dataSource={this.state.dataSource}
                ></PokeList>
            </View>
        );
    }
}
