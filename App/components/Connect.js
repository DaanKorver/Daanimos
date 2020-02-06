import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../AppStyle';
import {BarCodeScanner} from 'expo-barcode-scanner';

class Connect extends Component {
    constructor(props) {
        super(props);
        this.handleBarCodeScanned = this.handleBarCodeScanned.bind(this);
        this.state = {cameraPermission: false, scanned: false, uri: ''};
    }

    async useEffect() {
        const {status} = await BarCodeScanner.requestPermissionsAsync().catch(
            (e) => {
                console.log("BarcodeSnanner request permission error: ", e)
            }
        );
        this.setState({cameraPermission: status === ' granted'})
    }

    componentDidMount() {
        let _this = this;
        this.useEffect();
    }

    handleBarCodeScanned(data) {
        if (!this.state.scanned) {
            this.setState({scanned: true,});
            this.setState({uri: data.data});
        }
    };


    render() {
        return (
            <View style={styles.container}>
                <BarCodeScanner
                    style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#000'}}
                    onBarCodeScanned={(data) => {
                        this.handleBarCodeScanned(data)
                    }}/>
                <Text>{this.state.uri}</Text>
                {this.state.scanned ? <TouchableOpacity onPress={() => { this.setState({uri: '', scanned: false})}}><Text style={styles.button}>Scan Again</Text></TouchableOpacity> : <Text>No scan yet</Text>}
                <TouchableOpacity onPress={() => { this.props.makeSocket(this.state.uri) }}><Text style={styles.button}>Connect</Text></TouchableOpacity>
            </View>
        );
    }
}

async function getCameraPermision() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    let {status, permissions} = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
        return true
    } else {
        throw new Error('Camera permission not granted');
    }
}

export default Connect;