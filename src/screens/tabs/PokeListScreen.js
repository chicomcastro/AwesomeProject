
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

    async getDataFromAPI(obj, url) {
        try {
            const response = await fetch(url);
            const responseJson = await response.json();
            obj.setState({
                isLoading: false,
                dataSource: [obj.state.dataSource, ...responseJson.results],
                nextPage: responseJson.next,
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
                <PokeList
                    // Necessary
                    navigation={this.props.navigation}
                    // Customized
                    loadList={(obj) => this.getDataFromAPI(obj, this.props.navigation.state.params.url)}
                    onEndReached={(obj, url) => this.getDataFromAPI(obj, url)}
                    routeName="MyModal"
                ></PokeList>
            </View>
        );
    }
};
