import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../AppStyle';


class Drinks extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ProductConsumer>
                    {value => {
                        return this.state.products.map( product =>{
                            if (product.type == "drink") {
                                return <Product key={product.id} product={product}
                                />
                            }
                        })
                    }}
                </ProductConsumer>

                <TouchableOpacity onPress={()=>{this.props.setRoute("home")}} style={styles.button}><Text style={styles.buttonTxt}>Back</Text></TouchableOpacity>
            </View>
        );
    }
}

export default Drinks;