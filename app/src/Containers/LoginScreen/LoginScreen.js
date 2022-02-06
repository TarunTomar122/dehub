import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './styles';

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


    render() {
        return (
            <View style={styles.home}>
                <View style={styles.container}>
                    <Text style={styles.text}>Work in progress (Login Screen)</Text>
                </View>
            </View>
        );
    }
}

export default LoginScreen;