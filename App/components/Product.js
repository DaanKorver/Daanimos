import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import CartTotals from "./Cart/CartTotals";
import { styles } from '../AppStyle';

class Product extends Component {
    state = {
        product: this.props.product
    }
    render() {
        const {id, name, price, inCart} = this.state.product;
        return (
                <View style={styles.product}>
                    <View style={styles.productImageContainer}>                            
                        <Image style={styles.productImage}
                        source={require(`../assets/${name}.png`)}/>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.pizzaName}>{name}</Text>
                        <Text style={styles.pizzaPrice}>Prijs: € {price}</Text>
                    </View>
                    <ProductConsumer>
                        {(value) => (
                            <View style={styles.pizzaButtonContainer} onPress={() => value.handleDetail(id)}>

                                <TouchableOpacity style={styles.pizzaButton}  disabled={inCart ? true:false} onPress={() => {value.addToCart(id), this.state.product.inCart = true;}}>
                                    <Text style={styles.buttonTxt}>Add to Cart</Text>
                                    {/* {inCart?(<Text disabled>In cart</Text>):(<i className="fas fa-cart-plus"/>)} */}
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.pizzaButton} onPress={() => {value.removeItem(id), this.state.product.inCart = false;}}>
                                    <Text style={styles.buttonTxt}>Remove from Cart</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </ProductConsumer>
                </View>
        );
    }
}


export default Product;