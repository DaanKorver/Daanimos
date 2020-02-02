import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../AppStyle';

class Pizza extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>Pizza</Text>
                {/*Rick Pizza form goes here (you can remove the title ofcourse)*/}
            </View>
        );
    }
}

export default Pizza;