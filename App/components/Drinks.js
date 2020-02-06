import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../AppStyle';
import {ProductConsumer} from "../context";
import Product from "./Product";
import {products} from "../data";

class Drinks extends Component {
    state = {
        products: products,
    }
    render() {
        return (
            <View style={styles.container}>
                <ProductConsumer>
                    {value => {
                        return this.state.products.map( product =>{
                            return <Product key={product.id} product={product}
                            />
                        })
                    }}
                </ProductConsumer>
                <TouchableOpacity onPress={()=>{this.props.setRoute("home")}} style={styles.button}><Text>Back</Text></TouchableOpacity>
            </View>
        );
    }
}

export default Drinks;