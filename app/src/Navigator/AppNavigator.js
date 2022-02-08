import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from '../Components/Header';
import TabBar from '../Components/TabBar';

import HomeScreen from '../Containers/HomeScreen/HomeScreen.js';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen.js';

import LoginScreen from '../Containers/LoginScreen/LoginScreen.js';
import SplashScreen from '../Containers/SplashScreen/SplashScreen.js';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            initialRouteName={'home'}
            screenOptions={{
                header: props => <Header {...props} />,
                keyboardHidesTabBar: true,
            }}
            tabBar={props => <TabBar {...props} />}>
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default AppNavigator;