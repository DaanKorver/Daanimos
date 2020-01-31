import React, { Component } from 'react';
import { Text,Button, View } from 'react-native';
import Home from './components/Home'
import Test from './components/test'

export default class DaanimosApp extends Component {

    constructor(props) {
        super(props);
        this.state = {route: 'home', price: 0};

        // This binding is necessary to make `this` work in the callback
        this.getRoute = this.getRoute.bind(this);
        this.setRoute = this.setRoute.bind(this);
    }
    getRoute(){
        switch(this.state.route) {
            case 'home':
                return <Home/>;
            case 'test':
                return <Test/>;
            default:
            return ''
        }
    }
    setRoute(routeName){
        this.setState({
            route: routeName,
        });
    }

    render() {
        return (
            <View source={require("../App/assets/home.jpg")} style={{flex: 1, backgroundColor: '#402f7a', alignItems: "center", justifyContent: "center"}}>
                <Button onPress={()=>{this.setRoute("test")}} title={'Test'} />
                <Button onPress={()=>{this.setRoute("home")}} title={'home'} />
                {this.getRoute()}
            </View>
        );
    }
}