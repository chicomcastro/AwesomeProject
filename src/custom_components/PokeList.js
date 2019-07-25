
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
                numColumns={1}
                ListEmptyComponent={
                    <Text
                        style={{
                            padding: 10,
                            fontSize: 18,
                            height: 44,
                        }}
                    >
                        Your list is empty
                    </Text>
                }
                onEndReachedThreshold={0.1}
                onEndReached={() => this.props.onEndReached ? this.props.onEndReached() : null}
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