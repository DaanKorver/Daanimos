import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../AppStyle';

class Extras extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>Extras</Text>
                <TouchableOpacity onPress={()=>{this.props.setRoute("home")}} style={styles.button}><Text>Back</Text></TouchableOpacity>
            </View>
        );
    }
}

export default Extras;