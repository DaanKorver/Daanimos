import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from '../AppStyle';

class Home extends Component {
    render() {
        return (
            <View style={styles.homeContainer}>
                <TouchableOpacity onPress={()=>{this.props.setRoute("pizza")}} style={styles.mainButton}><Image style={styles.homeImage} source={require("../assets/pizza-icon.png")}/></TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.setRoute("drinks")}} style={styles.mainButton}><Image style={styles.homeImage} source={require("../assets/drink-icon.png")}/></TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.setRoute("extras")}} style={styles.mainButton}><Image style={styles.homeImage} source={require("../assets/plus-icon.png")}/></TouchableOpacity>
            </View>
        );
    }
}

export default Home;