import React from 'react';
import {Button, View, Text} from 'react-native';


export default function CartTotals({value}){
    const{cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <View className="container">
                <View className="row">
                    <View className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <Button className="btn btn-outline-danger
                       text-uppercase mb-3 px-5" title="REMOVE ALL"
                                    onPress={() => clearCart()}>
                            </Button>
                       <Text>
                       <Text className="text-title">
                           Totaal:
                       </Text>
                            <Text>€ {cartTotal}</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}