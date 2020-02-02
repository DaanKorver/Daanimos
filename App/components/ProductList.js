import React, {Component} from 'react';
import Product from './Product';
import {pizzas} from "../data";
import {ProductProvider, ProductConsumer} from "../context";
import { View } from 'react-native';

class ProductList extends Component {
    state = {
        products: pizzas
    }
    render() {
        return (
            <React.Fragment>
                <View className="py-5">
                    <View className="container">
                        <View className="row">
                            <ProductConsumer>
                                    {value => {
                                        return this.state.products.map( product =>{
                                            return <Product key={product.id} product={product}
                                            />
                                        })
                                    }}
                            </ProductConsumer>
                        </View>
                    </View>
                </View>
            </React.Fragment>
        );
    }
}

export default ProductList;