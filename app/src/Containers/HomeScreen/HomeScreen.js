import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './styles';

import IceCream from '../../assets/imgs/IceCream.svg';

class HomeScreen extends React.Component {
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
                    <IceCream width={500} height={500} fill="#000" style={styles.icon} />
                </View>
            </View>
        );
    }
}

export default HomeScreen;