import React, {Component} from 'react';
import {Text, View, ImageBackground, Button, TouchableOpacity, StatusBar} from 'react-native';
import Home from './components/Home'
import Drinks from './components/Drinks'
import Connect from './components/Connect'
import Extras from './components/Extras'
import Pizza from './components/Pizza'
import Cart from './components/Cart/Cart'
import {ProductProvider, ProductConsumer} from "./context";
import CartTotals from "./components/Cart/CartTotals";
import {styles} from './AppStyle';
import io from "socket.io-client";
import {ScreenOrientation} from 'expo';
import Product from "./components/Product";
import CartList from "./components/Cart/CartList";

export default class DaanimosApp extends Component {

    constructor(props) {
        super(props);
        this.state = {route: 'home',socket: null, connected: false, price: 0};

        // This binding is necessary to make `this` work in the callback
        this.getRoute = this.getRoute.bind(this);
        this.setRoute = this.setRoute.bind(this);
        this.makeSocket = this.makeSocket.bind(this);
    }

    getRoute() {
        switch (this.state.route) {
            case 'connect':
                return <Connect makeSocket={this.makeSocket}/>;
            case 'home':
                return <Home setRoute={this.setRoute}/>;
            case 'drinks':
                return <Drinks setRoute={this.setRoute}/>;
            case 'extras':
                return <Extras setRoute={this.setRoute}/>;
            case 'pizza':
                return <Pizza setRoute={this.setRoute}/>;
            case 'cart':
                return <Cart emit={this.emit} setRoute={this.setRoute}/>;
            default:
                return ''
        }
    }

    setProductView(bool) {
        if (this.state.productView !== bool) {
            this.setState({productView: bool});
        }
    }

    emit(){
        if (this.state.connected) {
            console.log('test');
            this.state.socket.emit("send order", {"test1": "test2"});
        }
    }

    setRoute(routeName) {
        this.setState({
            route: routeName,
        });
    }

    makeSocket(uri) {
        let socket = new io(uri);

        socket.on("connect", () => {
            this.setRoute("home");
            this.setState({connected: true})
            this.setState({socket: socket})
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
                        <View>
                            <ProductConsumer>
                                {value => {
                                    return <CartTotals value={value}></CartTotals>
                                }}
                            </ProductConsumer>
                        </View>
                    </ImageBackground>
                </View>
            </ProductProvider>
        )
            ;
    }
}