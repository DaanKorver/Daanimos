import React, {Component} from 'react';
import {Text, View, ImageBackground, Button, TouchableOpacity, StatusBar} from 'react-native';
import Home from './components/Home'
import Drinks from './components/Drinks'
import Connect from './components/Connect'
import Extras from './components/Extras'
import Pizza from './components/Pizza'
import {styles} from './AppStyle';
import io from "socket.io-client";

export default class DaanimosApp extends Component {

    constructor(props) {
        super(props);
        this.state = {route: 'connect', price: 0};

        // This binding is necessary to make `this` work in the callback
        this.getRoute = this.getRoute.bind(this);
        this.setRoute = this.setRoute.bind(this);
        this.makeSocket = this.makeSocket.bind(this);
    }

    getRoute() {
        switch (this.state.route) {
            case 'connect':
                return <Connect makeSocket={this.makeSocket} />;
            case 'home':
                return <Home setRoute={this.setRoute}/>;
            case 'drinks':
                return <Drinks/>;
            case 'extras':
                return <Extras/>;
            case 'pizza':
                return <Pizza/>;
            default:
                return ''
        }
    }

    setRoute(routeName) {
        this.setState({
            route: routeName,
        });
    }

    makeSocket(uri){
        this.socket = new io(uri);

        this.socket.on("connect", () => {
            this.setRoute("home");
        });
    }

    componentDidMount() {
        StatusBar.setHidden(true);

        // this.makeSocket('http://192.168.178.129:3000/');

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    {/* <Button style={styles.button} title="test" onPress={()=>{this.setRoute("test")}}>test</Button>
                    <Button style={styles.button} title="home" onPress={()=>{this.setRoute("home")}}>home</Button> */}
                    <TouchableOpacity onPress={() => {
                        this.setRoute("home")
                    }}><Text style={styles.button}>Home</Text></TouchableOpacity>
                </View>
                <ImageBackground source={require("../App/assets/home.jpg")} style={styles.screen}>
                    <View style={styles.main}>
                        {this.getRoute()}
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
