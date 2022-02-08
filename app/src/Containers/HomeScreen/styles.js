import { StyleSheet } from 'react-native';
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
    }, icon: {
        marginLeft: size.scale(180),
    }
});