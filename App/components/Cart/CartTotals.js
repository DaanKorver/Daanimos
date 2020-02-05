import React from 'react';
import {Button, View, Text} from 'react-native';


export default function CartTotals({value}){
    const{cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <View>
                <View>
                    <View>
                        <Button title="REMOVE ALL" onPress={() => clearCart()}>
                        </Button>
                       <Text>
                         <Text>
                             Totaal: € {cartTotal}
                         </Text>
                       </Text>
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}