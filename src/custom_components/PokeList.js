
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
    RefreshControl,
} from 'react-native';

import PokeListItem from '../custom_components/PokeListItem.js'


export default class PokeList extends React.Component {

    state = {
        isLoading: true,
        dataSource: [],
        error: '',
    };

    componentDidMount() {
        return this.props.loadList(this);
    }

    setListLoadingStatus(newLoadingState = false) {
        this.setState({ isLoading: newLoadingState });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <ActivityIndicator />
            )
        }

        return (
            <FlatList
                data={this.state.dataSource}
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

                extraData={this.state}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={() => {
                            this.setState({ isLoading: true });
                            this.props.loadList(this);
                        }}
                    />
                }
            />
        );
    }

    renderListButton(name, url) {
        return (
            <PokeListItem
                activatedText={name.charAt(0).toUpperCase() + name.slice(1)}
                navigationEvent={() => {
                    this.props.navigation.navigate(
                        { routeName: 'MyModal', url: url },
                    )
                }}
            ></PokeListItem> // 
        )
    }
}