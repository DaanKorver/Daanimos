import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import { Text, View, Button } from 'react-native';
import CartTotals from "./Cart/CartTotals";

class Product extends Component {
    state = {
        product: this.props.product
    }
    render() {
        const {id, name, price, inCart} = this.state.product;
        return (
                <View>
                    <Text>Pizza {name}</Text>
                    <Text>$ {price}</Text>
                    <ProductConsumer>
                        {(value) => (
                            <View onPress={() => value.handleDetail(id)}>
                                <Button title="Press me" disabled={inCart ? true:false} onPress={
                                    () => {value.addToCart(id);}
                                }>
                                    {inCart?(<Text disabled>In cart</Text>):(
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