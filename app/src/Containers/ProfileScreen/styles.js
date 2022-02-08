import { StyleSheet } from "react-native";

import { color, size, typography } from '../../theme';

export default StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: color.primary,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: size.scale(10),
    },
    text: {
        fontSize: 20,
        color: color.tertiaryBold,
    },
    button: {
        position: 'absolute',
        bottom: size.scale(120),
        backgroundColor: color.primaryBold,
        padding: size.scale(16),
        borderRadius: size.scale(8),
    },
    buttonText: {
        color: color.background,
        fontFamily: typography.primaryBold,
        fontSize: size.scale(18),
    },
    icon: {
        position: 'absolute',
        top: size.scale(20),
    }
});