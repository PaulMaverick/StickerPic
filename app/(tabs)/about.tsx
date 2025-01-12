import {Text, View, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import { globals, textDefault } from '@/constants/global';

export default function AboutScreen() {
    return (
        <View  style={styles.container}>
            <Text style={styles.text}>This is the about page</Text>
            <Text style={styles.text}>Go back to <Link href="/" style={styles.linkButtons}>Home Screen</Link></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globals.backgroundDefault,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: textDefault,
    linkButtons: {
        textDecorationLine: 'underline',
        color: globals.textColorDefault
    },
})