import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../AppStyle';

class Drinks extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>Drinks</Text>
            </View>
        );
    }
}

export default Drinks;