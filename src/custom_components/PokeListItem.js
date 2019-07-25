
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
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5
                }}
            >
                <TouchableOpacity
                    onPress={() => this.pressed()}
                >
                    <Text
                        style={{
                            padding: 10,
                            fontSize: 18,
                            height: 44,
                        }}
                    >
                        {this.props.activatedText}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    pressed() {
        this.props.navigationEvent();
    }
}