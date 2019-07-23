

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

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerLeft: (
            <View style={{ paddingLeft: 10 }}>
                <Image
                    source={{ uri: 'https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png' }}
                    style={{ width: 30, height: 30 }}
                />
            </View>),
        headerTitle: (
            <View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 18 }}>
                        myPokedex
                    </Text>
                </View>
            </View>),
        headerRight: (
            <View style={{ width: 30, height: 30, justifyContent:'center', alignContent:'center', paddingRight:2 }}>
                <Button
                    onPress={() => alert('This is a button!')}
                    title="+"
                    color="#fff"
                />
            </View>
        ),
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <ThemeProvider>
                    <Button
                        title="Go to Details"
                        onPress={() => { this.props.navigation.navigate({ routeName: 'Details' }) }}
                    />
                    <Button
                        title="Go to Content"
                        onPress={() => { this.props.navigation.navigate({ routeName: 'Content' }) }}
                    />
                </ThemeProvider>
            </View>
        );
    }
}

export default HomeScreen;