import React, {Component} from 'react';
import Product from './Product';
import {pizzas} from "../data";
import {pizzaConsumer} from "../context";
import { View } from 'react-native';

class ProductList extends Component {
    state={
        products: pizzas
    }
    render() {
        return (
            <React.Fragment>
                <View className="py-5">
                    <View className="container">
                        <View className="row">
                            <pizzaConsumer>
                                {value => {
                                    return value.products.map( product =>{
                                        return <Product key={product.id} product={product}
                                        />
                                    })
                                }}
                            </pizzaConsumer>
                        </View>
                    </View>
                </View>
            </React.Fragment>
        );
    }
}

export default ProductList;