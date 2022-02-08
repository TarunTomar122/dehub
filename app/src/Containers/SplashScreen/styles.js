import { StyleSheet } from "react-native";

import { color, size, typography } from '../../theme';

export default StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: color.secondary,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: size.scale(100),
    },
    text: {
        fontSize: size.scale(18),
        color: color.background,
        fontFamily: typography.primaryBold,
    },
    ttext:{
        fontSize: size.scale(54),
        color: color.tertiaryBold,
        fontFamily: typography.primaryBold,
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        left: size.scale(40),
    }
});