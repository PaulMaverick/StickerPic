import { StyleSheet, Pressable, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    label: string;
    onPress?: () => void;
    icon?: keyof typeof FontAwesome.glyphMap,
    iconSize?: number;
    iconColor?: string;
}

export default function Button({label, onPress, icon, iconColor, iconSize}: Props) {
    return (
        <View style={styles.btnContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                {icon ? <FontAwesome name={icon} size={iconSize} color={iconColor} style={styles.Btnicon}/> : <></>}
                <Text style={styles.btnLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 320,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    btnLabel: {
        color: '#292929',
        fontSize: 15,
    },
    Btnicon: {
        paddingRight: 5,
    }
})