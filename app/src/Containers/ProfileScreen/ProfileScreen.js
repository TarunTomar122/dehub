import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

import MProfile from '../../assets/imgs/MProfile.svg';

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    GoogleSignin,
} from 'react-native-google-signin';

class ProfileScreen extends React.Component {
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

    logout = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            AsyncStorage.removeItem("token");
            this.props.navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <View style={styles.home}>
                <View style={styles.container}>
                    <MProfile width={500} height={500} fill="#000" style={styles.icon} />
                    <TouchableOpacity style={styles.button} onPress={this.logout}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ProfileScreen;