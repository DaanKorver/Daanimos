import React, {Component} from 'react';
import {Image} from 'react-native';
import {styles} from '../AppStyle';
import {StyleSheet, Text, View} from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text class={styles.red}>Test</Text>
            </View>
        );
    }
}

export default Home;