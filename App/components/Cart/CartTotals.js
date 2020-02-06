import React from 'react';
import {Button, View, Text} from 'react-native';
import {styles} from '../../AppStyle';


export default function CartTotals({value}){
    const{cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <View>
                <Text style={styles.total}>
                    Totaal: € {cartTotal}
                </Text>
            </View>
        </React.Fragment>
    );
}