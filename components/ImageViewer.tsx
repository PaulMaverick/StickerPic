import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource;
    selectedImage: string | undefined
}

export default function ImageViewer({imgSource, selectedImage}: Props) {
    const currentImage = selectedImage ? selectedImage : imgSource;
    return <Image source={currentImage} style={styles.image} />
}   

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 15,
    }
})