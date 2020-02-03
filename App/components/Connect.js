import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../AppStyle';
import * as Permissions from 'expo-permissions';
import {RNCamera} from 'react-native-camera';

class Connect extends Component {
    constructor(props) {
        super(props);
        this.state = {cameraPermission: false, uri: 'http://192.168.178.129:3000/'};
    }

    componentDidMount() {
        setInterval(getCameraPermision, 10000)
        this.setState({cameraPermission: getCameraPermision()})
    }


    render() {
        return (
            <View style={styles.container}>
                {this.state.cameraPermission === true ? <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={{
                        flex: 1,
                        width: '100%',
                    }}
                >
                </RNCamera> : null}
                <Text>{this.state.uri}</Text>
                <TouchableOpacity onPress={() => {
                    this.props.makeSocket('http://192.168.178.129:3000/')
                }}><Text style={styles.button}>Connect</Text></TouchableOpacity>
            </View>
        );
    }
}

async function getCameraPermision(){
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    let {status, permissions} = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
        return true
    } else {
        throw new Error('Camera permission not granted');
    }
}

export default Connect;