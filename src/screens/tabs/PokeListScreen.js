
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

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Pokemons',
            headerRight: (
                <View>
                    <Icon.Button
                        onPress={navigation.getParam('customParam')}  // let customParam be a function to call from this "static environment"
                        name="undo"
                        backgroundColor="#f4511e"
                    />
                </View>
            ),
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({ customParam: this._onHeaderButtonClick });  // Sets customParam as a function on component mounting
        return this.attData();
    }

    state = {
        isLoading: true,
    };

    _onHeaderButtonClick = () => {  // Define witch function customParam should receive to perform action in this object

        this.attData();
        this.setListLoadingStatus();
    };

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
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Pokemons</Text>
                            <Text style={styles.sectionDescription}>
                                Navigate to see your favorite pokemon's infos.
                            </Text>
                        </View>
                        <PokeList
                            loadingEvent={(loadingStatus) => this.setListLoadingStatus(loadingStatus)}
                            navigationEvent={() => this.props.navigation.navigate({ routeName: "MyModal" })}
                            dataSource={this.state.dataSource}
                        ></PokeList>
                    </View>

                    <Button
                        title="Go to home"
                        onPress={() => { this.props.navigation.navigate({ routeName: 'Home' }) }}
                    />
                </ScrollView>
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

