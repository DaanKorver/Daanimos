import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
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
        return this.state.route;
    }
    setRoute(routeName){
        this.setState({
            route: routeName,
        });
    }

    render() {
        return (
            <ImageBackground source={require("../App/assets/home.jpg")} style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <button onClick={()=>{this.setRoute("test")}}>test</button>
                <button onClick={()=>{this.setRoute("home")}}>home</button>
                {this.getRoute() ===
                    'home' ? <Home/> :
                    'test' ? <Test/> :
                    ''
                }
            </ImageBackground>
        );
    }
}