import React, {Component} from 'react';
import Product from './Product';
import {products} from "../data";
import {ProductConsumer} from "../context";
import { View } from 'react-native';
import CartTotals from "./Cart/CartTotals";
import CartList from "./Cart/CartList";

class ProductList extends Component {
    state = {
        products: products,
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
                            <ProductConsumer>
                                {value => {
                                    return <CartList value={value}></CartList>
                                }}
                            </ProductConsumer>
                            <ProductConsumer>
                                {value => {
                                    return <CartTotals value={value}></CartTotals>
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