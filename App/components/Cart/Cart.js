import React, {Component} from 'react';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from "../../context";
import CartList from './CartList';
import CartTotals from './CartTotals';
import Succes from './Succes';
import {styles} from "../../AppStyle";
import {View, Image, TouchableOpacity, Text} from "react-native";

class Cart extends Component {
    render() {
        return (
            <View>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                    <Succes emit={this.props.emit} value={value}/>
                                </React.Fragment>
                            )
                        }
                        else{
                            return <EmptyCart/>;
                        }
                    }}
                </ProductConsumer>
                <TouchableOpacity onPress={()=>{this.props.setRoute("home")}} style={styles.button}><Text style={styles.buttonTxt}>Back</Text></TouchableOpacity>
            </View>
        );
    }
}

export default Cart;