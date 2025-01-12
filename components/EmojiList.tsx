import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Platform } from "react-native";
import { Image, type ImageSource } from "expo-image";
import { emojiData } from "@/Data/emojiData";

type Props = {
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
}



export default function EmojiList({onSelect, onCloseModal}: Props) {

    const [emojis] = useState<ImageSource[]>(emojiData)

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emojis}
            contentContainerStyle={styles.listContainer}
            renderItem={({item, index}) => (
                <Pressable 
                    onPress={() => {
                        onSelect(item);
                    }}>
                    <Image source={item} key={index} style={styles.image} />
                </Pressable>
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    }
})
