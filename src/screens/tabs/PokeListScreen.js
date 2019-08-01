
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
    FlatList,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

import PokeList from '../../custom_components/PokeList.js'


export default class PokeListScreen extends React.Component {

    async getDataFromAPI(obj) {
        try {
            const response = await fetch(this.props.navigation.state.params.url);
            const responseJson = await response.json();
            obj.setState({
                isLoading: false,
                dataSource: responseJson.results,
            }, function () {
            });
        }
        catch (error) {
            obj.setState({
                isLoading: false,
                error: 'Something just went wrong',
            });
        }
    }

    render() {

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <TextInput/>
                <PokeList
                    // Necessary
                    navigation={this.props.navigation}
                    // Customized
                    loadList={(obj) => this.getDataFromAPI(obj)}
                    onEndReached={() => { Alert.alert("Cheguei ao fim") }}
                    routeName="MyModal"
                ></PokeList>
            </View>
        );
    }
};
