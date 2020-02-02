import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../AppStyle';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>Home</Text>
                <TouchableOpacity onPress={()=>{this.props.setRoute("drinks")}}><Text style={styles.button}>Drinks</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.setRoute("extras")}}><Text style={styles.button}>Extras</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.setRoute("pizza")}}><Text style={styles.button}>Pizza</Text></TouchableOpacity>
            </View>
        );
    }
}

export default Home;