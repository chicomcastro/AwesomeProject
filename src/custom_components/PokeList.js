
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

import PokeListItem from '../custom_components/PokeListItem.js'


export default class PokeList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={this.props.dataSource}
                renderItem={({ item }) => this.renderListButton(item.name, item.url)}
                keyExtractor={(item) => item.url}
            />
        );
    }

    renderListButton(name, url) {
        return (
            <PokeListItem
                activatedText={name.charAt(0).toUpperCase() + name.slice(1)}
                navigationEvent={() => this.props.navigationEvent(url)}
            ></PokeListItem> // 
        )
    }
}