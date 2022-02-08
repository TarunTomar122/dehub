import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { color, size, spacing, typography } from '../theme';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = props => {
    const {
        leftIcon,
        onLeftPress,
        onRightPress,
        rightIcon,
        title,
        style,
        titleStyle,
        leftIconStyle,
        rightIconStyle,
    } = props;

    return (
        <View style={[{ ...styles.customHeader, ...style }, styles.elevation]}>
            {leftIcon ? (
                <TouchableOpacity onPress={onLeftPress} style={leftIconStyle}>
                    <Ionicons
                        name="arrow-back-outline"
                        color={color.text}
                        size={32}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            ) : null}
            <Text style={[styles.title, titleStyle]}>{props.route.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    customHeader: {
        height: size.scale(58),
        paddingHorizontal: spacing.tiny,
        backgroundColor: color.background,
        borderBottomWidth: 1,
        borderBottomColor: color.primary,
        shadowColor: color.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
        flexDirection: 'row',
        paddingVertical: size.scale(10),
        alignItems: 'center',
    },
    icon: {
        marginTop: size.scale(4),
    },
    title: {
        fontSize: size.scale(24),
        color: color.text,
        marginHorizontal: size.scale(10),
        fontFamily: typography.primaryBold,
    },
    rightIconStyle: {
        position: 'absolute',
        right: size.scale(18),
    },
    elevation: {
        elevation: 10,
        shadowColor: color.lightGrey,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // borderRadius: size.scale(10),
        padding: size.scale(15),
    },
});

export default CustomHeader;