
import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Alert,
    FlatList, ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import { Button, ThemeProvider } from 'react-native-elements';

export default class ModalScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
};