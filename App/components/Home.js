import React, {Component} from 'react';
import {Image} from 'react-native';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-container">
                    <div className="home-content">
                        <Image
                            style={{width: "60%", height: "40%",  resizeMode: 'contain'}}
                            source={require('../assets/logo-w-alt.png')}
                        />
                        <div className="nav-holder">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;