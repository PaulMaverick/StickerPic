import { Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globals } from '@/constants/global';

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}

export default function IconButton({icon, label, onPress}: Props) {
    return (
        <Pressable style={styles.btnContainer} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={globals.textColorDefault}/>
            <Text style={styles.btnLabel}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLabel: {
        color: globals.textColorDefault,
        marginTop: 5,
    },
})