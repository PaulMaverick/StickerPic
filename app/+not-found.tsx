import { StyleSheet, View } from "react-native";
import { Link, Stack } from "expo-router";
import { globals } from "@/constants/global";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops, Page not found! '}}/>
            <View style={styles.container}>
                <Link href="/" style={styles.linkButton}>Go back to Home</Link>
            </View>
        </>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globals.backgroundDefault,
    },
    linkButton: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: globals.textColorDefault
    }
})
