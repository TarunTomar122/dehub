import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import IceCream from '../../assets/imgs/IceCream.svg';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { WEBCLIENT_ID } from "@env"

import {
    GoogleSignin,
} from 'react-native-google-signin';

class SplashScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount() {

        GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: WEBCLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });

        setTimeout(async () => {
            const token = await AsyncStorage.getItem('token');

            if (token) {
                this.props.navigation.navigate('HomeTabs');
            } else {
                this.props.navigation.navigate('Login');
            }
        }, 2000);
    }

    render() {
        return (
            <View style={styles.home}>
                <View style={styles.container}>
                    <Text style={styles.text}>Welcome to</Text>
                    <Text style={styles.ttext}>Dehub</Text>
                    <IceCream width={500} height={500} fill="#000" style={styles.icon} />
                </View>
            </View>
        );
    }

}

export default SplashScreen;