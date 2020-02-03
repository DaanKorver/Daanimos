import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../AppStyle';
import * as Permissions from 'expo-permissions';
import {RNCamera} from 'react-native-camera';

class Connect extends Component {
    constructor(props) {
        super(props);
        this.state = {cameraPermission: false, uri: 'http://172.16.2.241:3000/'};
        this.getCameraPermision = getCameraPermision;
    }

    componentDidMount() {
        this.setState({cameraPermission: this.getCameraPermision()})
    }




    render() {
        return (
            <View style={styles.container}>
                {this.state.cameraPermission !== true ? <RNCamera
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
                    this.props.makeSocket(this.state.uri)
                }}><Text style={styles.button}>Connect</Text></TouchableOpacity>
            </View>
        );
    }
}

async function getCameraPermision(){
    const {status, permissions} = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
        return true
    } else {
        return false
    }
}

export default Connect;