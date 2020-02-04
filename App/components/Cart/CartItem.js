import React from 'react';
import {View, Text} from 'react-native';

export default function CartItem({item,value}){
    const{id,type,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <View className="row my-3 text-capitalize text-center">

            <View className="col-10 mx-auto col-lg-2">
                <Text className="d-lg-none">product : {type}</Text>
            </View>
            <View className="col-10 mx-auto col-lg-2">
                <Text className="d-lg-none">price : {price}</Text>

            </View>
            <View className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <View className="d-flex justify-content-center">
                    <View>
              <Text className="btn btn-black mx-1"
                    onClick={() =>decrement(id)}>
                -</Text>

                        <Text className="btn btn-black mx-1">
                  {count}</Text>
                        <Text className="btn btn-black mx-1"
                              onClick={() =>increment(id)}>
                +</Text>
                    </View>
                </View>
            </View>
            {/* End of column */}

            <View className="col-10 mx-auto col-lg-2">
                <View className="cart-icon" onPress={()=>removeItem(id)}>
                </View>
            </View>

            <View className="col-10 mx-auto col-lg-2">
                <Text>Totaal: € {total}</Text>
            </View>
        </View>
    );
}