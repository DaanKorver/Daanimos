import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../AppStyle';

class Home extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.red}>Home</Text>
                </View>
        );
    }
}

export default Home;