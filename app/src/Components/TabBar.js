import React from 'react';

import { View, Pressable, Dimensions, StyleSheet } from 'react-native';

import { color, size } from '../theme';

const { width, height } = Dimensions.get('window');

import Home from '../assets/imgs/Home.svg';
import MProfile from '../assets/imgs/MProfile.svg';

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.mainContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <View
                        key={index}
                        style={[
                            styles.mainItemContainer,
                            { borderRightWidth: label == 'home' ? 3 : 0 },
                        ]}>
                        <Pressable
                            onPress={onPress}
                            style={{
                                borderBottomColor: 'white',
                                borderBottomWidth: isFocused ? 1 : 0,
                            }}>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flex: 1,
                                    padding: 4,
                                }}>
                                {label == 'home' ? (

                                    isFocused ? (
                                        <Home width={height / 13} height={height / 13} fill={isFocused ? color.primary : color.tertiary} />
                                    ) : (
                                        <Home width={height / 14} height={height / 14} fill={isFocused ? color.primary : color.tertiary} />
                                    )

                                ) : (
                                    isFocused ? (
                                        <MProfile width={height / 12} height={height / 12} fill={isFocused ? color.primary : color.tertiary} />
                                    ) : (
                                        <MProfile width={height / 13} height={height / 13} fill={isFocused ? color.primary : color.tertiary} />
                                    )
                                )}

                            </View>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: size.scale(10),
        top: height - size.scale(100),
        left: size.scale(5),
        right: size.scale(5),
        backgroundColor: color.tertiaryBold,
        borderTopRightRadius: size.scale(20),
        borderTopLeftRadius: size.scale(20),
        borderBottomLeftRadius: size.scale(20),
        borderBottomRightRadius: size.scale(20),
        marginHorizontal: 0,
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        borderColor: color.background,
    },
});

export default TabBar;