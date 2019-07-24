
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


export default class PokeListItem extends React.Component {

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