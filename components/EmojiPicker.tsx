import { View, Modal, StyleSheet, Text, Pressable } from "react-native";
import { PropsWithChildren } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { globals } from "@/constants/global";

type Props = PropsWithChildren<{
    isVisible: boolean,
    onClose: () => void
}>

export default function EmojiPicker({isVisible, onClose, children}: Props) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color={globals.textColorDefault} size={22}/>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        height: '25%',
        width: '100%',
        backgroundColor: globals.backgroundDefault,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '20%',
        padding: 5,
        backgroundColor: globals.secondaryBGColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: globals.textColorDefault,
        fontSize: 16,
    }
})