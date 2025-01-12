import { View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globals } from "@/constants/global";

type Props = {
    onPress: () => void;
    icon?: keyof typeof MaterialIcons.glyphMap;
    iconSize?: number;
    iconColor?: string;
}

export default function CircleButton({onPress, icon, iconSize, iconColor}: Props) {
    return (
        <View style={styles.btnContainer}>
            <Pressable onPress={onPress} style={styles.circleButton}>
                <MaterialIcons name={icon} size={iconSize}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 84,
        height: 84,
        borderWidth: 4,
        borderColor: globals.textColorDefault,
        borderRadius: '50%',
        padding: 3
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: globals.textColorDefault,
    }
})