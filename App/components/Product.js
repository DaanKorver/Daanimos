import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import { Text, View, Button } from 'react-native';
import CartTotals from "./Cart/CartTotals";

class Product extends Component {
    render() {
        const {id, type, price, inCart} = this.props.product;
        return (
                <View className="card">
                    <Text>Pizza {type}</Text>
                    <Text>$ {price}</Text>
                    <ProductConsumer>
                        {(value) => (
                            <View className="img-container p-5" onPress={() => value.handleDetail(id)}>
                                <Button title="Press me" className="cart-btn" disabled={inCart ? true:false} onPress={
                                    () => {value.addToCart(id);}
                                }>
                                    {inCart?(<Text className="text-capitalize mb-0" disabled>In cart</Text>):(
                                        <i className="fas fa-cart-plus"/>)}
                                </Button>
                                <Button title="Test" onPress={() => {value.removeItem(id);}}/>
                            </View>
                        )}
                    </ProductConsumer>
                </View>
        );
    }
}


export default Product;