
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
            <View style={styles.sectionList}>
                <FlatList
                    data={this.props.dataSource}
                    renderItem={({ item }) => this.renderListButton(item.name, item.url)}
                    keyExtractor={(item) => item.url}
                />
            </View>
        );
    }

    renderListButton(name, url) {
        return (
            <PokeListItem
                activatedText={name}
                url={url}
                onPress={() => this.props.loadingEvent()}
            ></PokeListItem> // 
        )
    }
}

const styles = StyleSheet.create({
    sectionList: {
        fontSize: 12,
        marginTop: 24,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
});