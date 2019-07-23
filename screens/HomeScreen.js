

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
            <ScrollView style={styles.container}>
                <View style={styles.boxLarge} >
                    <Text> Home Screen</Text>
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
                <ScrollView horizontal>
                    <View style={styles.boxSmall} />
                    <View style={styles.boxSmall} />
                    <View style={styles.boxSmall} />
                </ScrollView>
                <View style={styles.boxLarge} />
                <View style={styles.boxSmall} />
                <View style={styles.boxLarge} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxSmall: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: 'skyblue',
    },
    boxLarge: {
        width: 300,
        height: 300,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: 'steelblue',
    },
})

export default HomeScreen;