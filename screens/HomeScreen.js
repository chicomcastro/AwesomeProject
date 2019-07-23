

import React from 'react';

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

import { StackActions, NavigationActions } from 'react-navigation'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Details' })
                            ],
                        }))
                    }}
                />
            </View>
        );
    }
}

export default HomeScreen;