
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

export default class PokeItensScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>PokeItensScreen</Text>
                <Button
                    title="Go to content"
                    onPress={() => { this.props.navigation.navigate({ routeName: 'Content' }) }}
                />
                <Button
                    title="Go to Home"
                    onPress={() => { this.props.navigation.navigate({ routeName: 'Home' }) }}
                />
            </View>
        );
    }
}
