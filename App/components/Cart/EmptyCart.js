import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from '../../AppStyle';

class EmptyCart extends Component {
    render() {
        return (
            <View style={styles.homeContainer}>
                <Text>Cart is empty</Text>
            </View>
        );
    }
}

export default EmptyCart;