import React, { Component } from 'react';
import { Text, View, ImageBackground, Button, TouchableOpacity, StatusBar } from 'react-native';
import Home from './components/Home'
import Drinks from './components/Drinks'
import Extras from './components/Extras'
import Pizza from './components/Pizza'
import ProductList from './components/ProductList';
import {ProductProvider} from "./context";
import {styles} from './AppStyle';
import { ScreenOrientation } from 'expo';

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
                return <Home setRoute={this.setRoute}/>;
            case 'drinks':
                return <Drinks setRoute={this.setRoute} />;
            case 'extras':
                return <Extras setRoute={this.setRoute}/>;
            case 'pizza':
                return <Pizza setRoute={this.setRoute}/>;
            default:
            return ''
        }
    }
    setRoute(routeName){
        this.setState({
            route: routeName,
        });
    }

    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
        StatusBar.setHidden(true);
     }

    render() {
        return (
            <ProductProvider>
                <View style={{flex: 1}}>
                    <ImageBackground source={require("../App/assets/home.jpg")} style={styles.screen}>
                        <View style={this.state.route !== 'home' ? styles.main : styles.home}>
                            {this.getRoute()}
                        </View>
                </ImageBackground>
                </View>
            </ProductProvider>
        );
    }
}