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
                <View>
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
            </React.Fragment>
        );
    }
}

export default ProductList;