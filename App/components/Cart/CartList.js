import React from 'react';
import CartItem from './CartItem';
import {View} from 'react-native';


export default function CartList({value}) {

    const {cart} = value;
    return (
        <View>
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value}/>
            })}
        </View>
    );
}