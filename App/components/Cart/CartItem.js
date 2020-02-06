import React from 'react';
import {View, Text} from 'react-native';

export default function CartItem({item,value}){
    const{id,name,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <View>

            <View>
                <Text>
                    product : {name}
                </Text>
            </View>
            <View>
                <Text>
                    price : {price}
                </Text>

            </View>
            <View>
                <View>
                    <View>
                        <Text onPress={() =>decrement(id)}>
                            -
                        </Text>

                        <Text>
                         {count}
                        </Text>
                        <Text onPress={() =>increment(id)}>
                            +
                        </Text>
                    </View>
                </View>
            </View>

            <View>
                <View onPress={()=>removeItem(id)}>
                </View>
            </View>

            <View>
                <Text>Totaal: € {total}</Text>
            </View>
        </View>
    );
}