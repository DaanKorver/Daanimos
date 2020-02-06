import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../AppStyle';
import {ProductConsumer} from "../context";
import Product from "./Product";
import {products} from "../data";

class Pizza extends Component {
    state = {
        products: products,
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Headline}>Drinks</Text>
                <ProductConsumer>
                    {value => {
                        return products.map( product =>{
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

export default Pizza;