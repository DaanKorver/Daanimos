import React from 'react';
import {View, Text, Button} from 'react-native';
export default function Succes({value, emit}){
    const{cartTotal} = value;
    let myEmit = emit;
    return (
        <React.Fragment>
            <View>
                <View>
                       <Text>
                           Totaal:
                       </Text>
                            <Text>€ {cartTotal}</Text>
                        </View>
                <Button onPress={()=>{myEmit(value.cart)}} title={"place order"}/>
            </View>
        </React.Fragment>
    );
}