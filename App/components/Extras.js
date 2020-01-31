import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../AppStyle';

class Extras extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>Extras</Text>
            </View>
        );
    }
}

export default Extras;