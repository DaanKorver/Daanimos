import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../AppStyle';
import {ProductConsumer} from "../context";
import Product from "./Product";
import {products} from "../data";
import CartList from "../components/Cart/CartList"

class Pizza extends Component {
    state = {
        products: products,
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.productContainer}>
                <ProductConsumer>
                    {value => {
                        return this.state.products.map( product =>{
                            return <Product key={product.id} product={product}
                            />
                        })
                    }}
                </ProductConsumer>
                {/*Rick Pizza form goes here (you can remove the title ofcourse)*/}
                </View>
                <TouchableOpacity onPress={()=>{this.props.setRoute("home")}} style={styles.button}><Text style={styles.buttonTxt}>Back</Text></TouchableOpacity>
            </View>
        );
    }
}

export default Pizza;