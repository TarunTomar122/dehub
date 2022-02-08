import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

import AsyncStorage from "@react-native-async-storage/async-storage";

import IceCream from '../../assets/imgs/IceCream.svg';

import {
    GoogleSignin,
    statusCodes,
} from 'react-native-google-signin';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount() {

        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.refreshScreen();
        });

    }

    componentWillUnmount() {
        try {
            this._unsubscribe();
        } catch (err) { }
    }

    async refreshScreen() {

    }

    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            await AsyncStorage.setItem("token", idToken);
            this.props.navigation.navigate('HomeTabs');
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };


    render() {
        return (
            <View style={styles.home}>
                <View style={styles.container}>
                    <IceCream width={500} height={500} fill="#000" style={styles.icon} />
                    <TouchableOpacity style={styles.button} onPress={this._signIn}>
                        <Text style={styles.buttonText}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;