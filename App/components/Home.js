import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../AppStyle';

class Home extends Component {
    render() {
        return (
            <View style={styles.homeContainer}>
                <TouchableOpacity onPress={()=>{this.props.setRoute("drinks")}} style={styles.mainButton}><Text>Drinks</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.setRoute("extras")}} style={styles.mainButton}><Text>Extras</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.setRoute("pizza")}} style={styles.mainButton}><Text>Pizza</Text></TouchableOpacity>
            </View>
        );
    }
}

export default Home;