

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
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <View style={{ paddingLeft: 10 }}>
                    <Image
                        source={{ uri: 'https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png' }}
                        style={{ width: 30, height: 30 }}
                    />
                </View>),
            title: "myPokedex",
            headerRight: (
                <View style={{ width: 30, height: 30, justifyContent: 'center', alignContent: 'center', paddingRight: 2 }}>
                    <Button
                        onPress={navigation.getParam('customParam')}  // let customParam be a function to call from this "static environment"
                        title="+"
                        color="#fff"
                    />
                </View>
            ),
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({ customParam: this._onHeaderButtonClick });  // Sets customParam as a function on component mounting
    }

    state = {
        count: 0,
    };

    _onHeaderButtonClick = () => {  // Define witch function customParam should receive to perform action in this object
        this.setState({ count: this.state.count + 1 });
        alert(this.state.count);
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