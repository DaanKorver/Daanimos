import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../AppStyle';

class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {steps: [], price: 0};
    }

    setStep(index, itemIndex) {
        let newSteps = this.state.steps;
        newSteps[index] = steps[index].content[itemIndex];
        this.setState({steps: newSteps});
    }

    getStep(index) {

        let content = [];
        for (let i = 0; i < steps[index].content.length; i++) {
            let item = Object.keys(steps[index].content[i]);
            // alert(item[1]);
            content.push(
                <TouchableOpacity onPress={() => {
                    this.setStep(index, i)
                }}>
                    <Text>name: {item[0]}</Text>
                    <Text>price: {steps[index].content[i][item[0]]}</Text>
                </TouchableOpacity>
            );
        }
        // alert(content);
        return content
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>Pizza</Text>
                <TouchableOpacity onPress={() => {
                    this.props.setRoute("home")
                }} style={styles.button}><Text>Back</Text></TouchableOpacity>

                {/* Pizza steps start here */}

                {this.getStep(0)}

                <Text style={{color: '#f00'}}>
                    {JSON.stringify(this.state.steps)}
                </Text>

            </View>
        );
    }
}

let steps = [
    {stepName: "Pizza", content: [{"Hawaii": 8}, {"Peperoni": 8.5}, {"Margarita": 7}]},
    {stepName: "Size", content: [{"Normal": 0}, {"Big": 1}, {"Huge": 2.5}]},
    {stepName: "Extra", content: [{"Extra Cheese": .75}, {"Extra Meat": 1}, {"Extra Union": .5}]},
];

export default Pizza;