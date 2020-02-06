import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../AppStyle';

class Drinks extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>Drinks</Text>
                <TouchableOpacity onPress={()=>{this.props.setRoute("home")}} style={styles.button}><Text>Back</Text></TouchableOpacity>
                {/*Rick Drink form goes here (you can remove the title ofcourse)*/}
            </View>
        );
    }
}

export default Drinks;