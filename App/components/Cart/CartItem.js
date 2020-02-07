import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../Appstyle';

export default function CartItem({item,value}){
    const{id,name,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <View style={styles.cartContainer}>
                <Text style={styles.cartProduct}>
                    Product: {name}
                </Text>
            <View>
                <Text style={styles.cartPrice}>
                    Prijs: €{price}
                </Text>
            </View>
            <View style={styles.cartAmount}>
                <Text style={styles.increment} onPress={() =>decrement(id)}>
                    -
                </Text>

                <Text style={styles.count}>
                 {count}
                </Text>
                <Text style={styles.increment} onPress={() =>increment(id)}>
                    +
                </Text>
            </View>
            <View style={styles.countContainer}>
                <Text style={styles.totalPrice}>€{price * count}</Text>
            </View>

            <View>
                <View onPress={()=>removeItem(id)}>
                </View>
            </View>
        </View>
    );
}