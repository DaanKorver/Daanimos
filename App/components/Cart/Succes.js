import React from 'react';
import {View, Text} from 'react-native';
export default function Succes({value}){
    const{cartTotal} = value;
    return (
        <React.Fragment>
            <View>
                <View>
                       <Text>
                           Totaal:
                       </Text>
                            <Text>€ {cartTotal}</Text>
                        </View>
            </View>
        </React.Fragment>
    );
}