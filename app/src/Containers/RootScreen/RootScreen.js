import React from 'react';
import { View } from 'react-native';
import AppNavigator from '../../Navigator/AppNavigator';

import { SocketProvider } from "../../contexts/Socket";
import io from "socket.io-client";

const SOCKET_URL = "http://10.0.2.2:4040";

class RootScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: null,
        };
    }

    UNSAFE_componentWillMount() {
        this.connectSocket();
    }

    connectSocket = () => {
        try {
            this.setState({
                socket: io.connect(SOCKET_URL, {
                    transports: ["websocket"],
                    reconnectionAttempts: 15,
                }),
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SocketProvider socket={this.state.socket}>
                    <AppNavigator />
                </SocketProvider>
            </View>
        );
    }
}

export default RootScreen;