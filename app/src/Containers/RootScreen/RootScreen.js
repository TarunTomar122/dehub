import React from 'react';
import AppNavigator from '../../Navigator/AppNavigator';

class RootScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <AppNavigator />;
    }
}

export default RootScreen;