import React, {Component} from 'react';
import {Image} from 'react-native';
import { styles } from '../AppStyle';
import { StyleSheet, Text, View } from 'react-native';

class Home extends Component {
    render() {
        return (
                <View class={styles.container}>
                    <Text class={styles.red}>Home</Text>
                </View>
        );
    }
}

export default Home;