
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
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { StackActions, NavigationActions } from 'react-navigation'

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
                <TouchableOpacity
                    onPress={() => this.pressed()}
                >
                    <Text style={styles.row}> {this.props.activatedText} </Text>
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
        this.state = { isLoading: true }
    }

    componentDidMount() {                                 // Component has just been mounted
        return fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
                response.json()
                    .then(responseJson => {
                        this.setState({
                            isLoading: false,
                            dataSource: responseJson.results,
                        }, function () {
                            console.log("Poke list charged");
                        });
                    })
                    .catch(error => {
                        console.error(error);
                    }), console.log("API accessed (fetch ok)");
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <ActivityIndicator />
            )
        }

        return (
            <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => this.renderListButton(item.name, item.url)}
                keyExtractor={(item) => item.url}
            />
        );
    }

    renderListButton(name, url) {
        return (
            <AButton activatedText={name} url={url} onPress={() => this.setListLoadingStatus()}></AButton> // 
        )
    }

    setListLoadingStatus() {
        this.setState({ isLoading: !this.state.isLoading });
    }
}

class ContentScreen extends React.Component {

    render() {
        return (
            <View>
                <PokeList
                    style={styles.container}/>
                <Button
                    title="Go to home"
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Home' })
                            ],
                        }))
                    }
                    }
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.lighter,
    },
    container: {
        flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
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

export default ContentScreen;

