
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
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { StackActions, NavigationActions } from 'react-navigation'

import { Header } from 'react-native-elements'

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
            <View>
                <TouchableOpacity onPress={() => this.pressed()}>
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
    }

    render() {

        return (
            <View style={styles.sectionList}>
                <FlatList
                    data={this.props.dataSource}
                    renderItem={({ item }) => this.renderListButton(item.name, item.url)}
                    keyExtractor={(item) => item.url}
                />
            </View>
        );
    }

    renderListButton(name, url) {
        return (
            <AButton activatedText={name} url={url} onPress={() => this.props.loadingEvent()}></AButton> // 
        )
    }
}

class ContentScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    setListLoadingStatus() {
        this.setState({ isLoading: !this.state.isLoading });
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
            <View style={{ flex: 1 }}>
                <Header
                    placement='left'
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'POKEMONS', style: { fontSize: 18, color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Pokemons</Text>
                            <Text style={styles.sectionDescription}>
                                Navigate to see your favorite pokemon's infos.
                            </Text>
                        </View>
                        <PokeList loadingEvent={() => this.setListLoadingStatus} dataSource={this.state.dataSource} ></PokeList>
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
    sectionList: {
        fontSize: 12,
        marginTop: 24,
        justifyContent: 'center',
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

export default ContentScreen;

