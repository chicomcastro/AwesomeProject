
import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    Image,
    StatusBar,
    Alert,
    FlatList, ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Text style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 20,
                    paddingLeft: 22,
                }}>
                    myPokedex
                </Text>
            </View >
        );
    }
}