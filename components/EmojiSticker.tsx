import Animated, {useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { type ImageSource } from "expo-image";


type Props = {
    imageSize: number;
    stickerSource: ImageSource;
    onRemoveEmoji: (id: number) => void;
    id: number;
}

export default function EmojiSticker({imageSize, stickerSource, onRemoveEmoji, id} : Props) {

    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

  
    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if(scaleImage.value !== imageSize * 2) {
                scaleImage.value = imageSize * 2;
            } else {
                scaleImage.value = Math.round(scaleImage.value / 2);
            }
        });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    const LongTap = Gesture.LongPress().onEnd((e, success) => {
        if(success) {
            onRemoveEmoji(id);
        }
    })

    const drag = Gesture.Pan().onChange(event => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    })

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: translateX.value},
                {translateY: translateY.value},
            ]
        }
    })

    const composed = Gesture.Simultaneous(drag, LongTap);

    return (
   
        <GestureDetector gesture={composed}>
            <Animated.View style={[containerStyle, {top: -350}]}>
           
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image 
                        source={stickerSource} 
                        style={[imageStyle, {width: imageSize, height: imageSize}]} 
                        resizeMode="contain"
                    />
                </GestureDetector>  
            </Animated.View>
        </GestureDetector>
    )
}
