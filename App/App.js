import React, {Component} from 'react';
import {Text, View, ImageBackground, Button, TouchableOpacity, StatusBar} from 'react-native';
import Home from './components/Home'
import Drinks from './components/Drinks'
import Connect from './components/Connect'
import Extras from './components/Extras'
import Pizza from './components/Pizza'
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
        this.state = {route: 'connect', connected: false, price: 0};

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
            default:
                return ''
        }
    }

    setProductView(bool) {
        if (this.state.productView !== bool) {
            this.setState({productView: bool});
        }
    }

    setRoute(routeName) {
        this.setState({
            route: routeName,
        });
    }

    makeSocket(uri) {
        this.socket = new io(uri);

        this.socket.on("connect", () => {
            this.setRoute("home");
            this.setState({connected: true})
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
