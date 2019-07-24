
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
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

import PokeList from '../../custom_components/PokeList.js'


export default class PokeListScreen extends React.Component {

    state = {
        isLoading: true,
    };

    componentDidMount() {
        return this.attData();
    }

    setListLoadingStatus(newLoadingState = false) {
        this.setState({ isLoading: newLoadingState });
    }

    async attData() {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.results,
            }, function () {
            });
        }
        catch (error) {
            console.error(error);
        }
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
            <View style={{ flex: 1, alignItems:'center', paddingTop: 24 }}>
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

