import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Home from './components/Home'

export default class DaanimosApp extends Component {
    state = { title: 'Hello world!' };
    render() {
        return (
            <ImageBackground source={require("../App/assets/home.jpg")} style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
             <Home />
            </ImageBackground>
        );
    }
}