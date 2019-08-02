
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
import { SearchBar } from 'react-native-elements';

export default class PokeList extends React.Component {

    state = {
        isLoading: true,
        dataSource: [],
        error: '',
        search: '',
    };

    updateSearch = search => {
        this.setState({ search: search });
    };

    componentDidMount() {
        return this.props.loadList(this);
    }

    render() {

        if (this.state.isLoading) {
            return (
                <ActivityIndicator />
            )
        }

        const { search } = this.state;

        return (
            <FlatList
                data={this.filterData(this.state.dataSource)}
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

                ListHeaderComponent={
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                }

                onEndReachedThreshold={0.1}
                onEndReached={() => this.props.onEndReached ? (this.state.nextPage ? this.props.onEndReached(this, this.state.nextPage) : null) : null}

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
                    this.props.routeName ?
                        this.props.navigation.navigate(
                            { routeName: this.props.routeName, url: url },
                        ) : null
                }}
            ></PokeListItem> //
        )
    }

    filterData(data) {
        return data.filter((item) => { if (item.name.includes(this.state.search)) return item; });
    }
}
