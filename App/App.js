import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DaanimosApp extends Component {
    state = { title: 'Hello world!' };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>{this.state.title}</Text>
            </View>
        );
    }
}