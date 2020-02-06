import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../AppStyle';

class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {steps: [], price: 0};
    }

    setStep(index, itemIndex, type) {
        let newSteps = this.state.steps;
        if (type === 'Radio') {
            newSteps[index] = steps[index].content[itemIndex];
        } else {
            let step = newSteps[index];
            if (step === undefined) {
                step = [steps[index].content[itemIndex]];
            } else {
                let stepFind = step.findIndex(s => s === steps[index].content[itemIndex]);
                if (stepFind !== -1) {
                    step.splice(stepFind, 1);
                } else {
                    step.push(steps[index].content[itemIndex]);
                }
            }
            newSteps[index] = step;
            console.log(step)
        }

        this.setState({steps: newSteps});
    }

    getStep(index) {
        let content = [];
        content.push(<Text style={{backgroundColor: '#eee'}}>{steps[index].stepName}</Text>);
        for (let i = 0; i < steps[index].content.length; i++) {
            let item = Object.keys(steps[index].content[i]);
            // alert(item[1]);
            content.push(
                <TouchableOpacity onPress={() => {
                    this.setStep(index, i, steps[index].type)
                }}>
                    <Text>{
                        this.state.steps[index] && (steps[index].type === 'Radio' && this.state.steps[index] === steps[index].content[i] || steps[index].type === 'Checkbox' && this.state.steps[index].findIndex(s => s === steps[index].content[i]) >= 0)
                            ? (steps[index].type === 'Radio' ? '(.)' : '[x]') : (steps[index].type === 'Radio' ? '( )' : '[ ]')
                    }</Text>
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

                {this.getStep(0)}
                {this.getStep(1)}
                {this.getStep(2)}

                <Text style={{color: '#f00'}}>
                    {JSON.stringify(this.state.steps)}
                </Text>

            </View>
        );
    }
}

let steps = [
    {stepName: "Pizza", type: "Radio", content: [{"Hawaii": 8}, {"Peperoni": 8.5}, {"Margarita": 7}]},
    {stepName: "Size", type: "Radio", content: [{"Normal": 0}, {"Big": 1}, {"Huge": 2.5}]},
    {stepName: "Extra", type: "Checkbox", content: [{"Extra Cheese": .75}, {"Extra Meat": 1}, {"Extra Union": .5}]},
];

export default Pizza;