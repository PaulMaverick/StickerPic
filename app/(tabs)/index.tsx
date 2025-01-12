//react react native
import {  View, StyleSheet, Platform } from "react-native";
import {  type ImageSource } from 'expo-image';
import { useState, useRef, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibary from 'expo-media-library';
import { captureRef } from "react-native-view-shot";
import domtoimage from 'dom-to-image';
//globals
import { globals} from "@/constants/global";
//components
import CircleButton from '@/components/CircleButton';
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import EmojiSticker from "@/components/EmojiSticker";
//utils/types
import { EmojiType } from "@/utilities/originalTypes";
import { setID } from "@/utilities/utils";

const placeholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  const [status, requestPermission] = MediaLibary.usePermissions();
  const imageRef = useRef<View>(null);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pickedEmojis, setPickedEmojis] = useState<EmojiType[]>([]);

  useEffect(() => {
    if(status === null) {
      requestPermission();
    };
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled) {
      setImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.')
    }
  }

  const onReset = () => {
    setShowOptions(false);
    setImage(undefined);
    setPickedEmojis([])
  };

  const onAddSticker = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  }

  const selectEmojis = (newEmoji: ImageSource) => {
    const newEmojis = [...pickedEmojis];

    newEmojis.push({
      id: setID(),
      source: newEmoji
    });

    setPickedEmojis(newEmojis);
  }

  const onRemoveEmoji = (id: number) => {
    // const newEmojis = [...pickedEmojis];
    // let filtered = newEmojis.filter(emoji => emoji.id !== id);

    // setPickedEmojis(filtered);
    console.log(id)
  }

  const onSaveImage = async () => {
    if(Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
  
        await MediaLibary.saveToLibraryAsync(localUri);
        if(localUri){
          alert('saved!');
        }
      } catch(e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        
        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      }catch (e) {
        console.log(e);
      }
    }
    
  };


  //

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={placeholderImage} selectedImage={image} />
          {pickedEmojis &&  pickedEmojis.map((emoji)=> <EmojiSticker key={emoji.id} imageSize={40} stickerSource={emoji.source} onRemoveEmoji={onRemoveEmoji} id={emoji.id}/>)}
        </View>
      </View>
      {showOptions ? (
          <View style={styles.modalContainer}>
              <View style={styles.modalRow}>
                <IconButton icon="refresh" onPress={onReset} label="Reset"/>
                <CircleButton icon="add" onPress={onAddSticker} iconSize={38} iconColor={globals.textColorDefault}/>
                <IconButton icon="save-alt" onPress={onSaveImage} label="Save"/>
              </View>
          </View>
        ) : (
          <View style={styles.btnContainer}>
            <Button label="Choose a Photo" onPress={pickImageAsync} icon="picture-o" iconSize={18} iconColor="#25292e"/>
            <Button label="Edit this Photo" onPress={() => setShowOptions(true)}/>
          </View>
        )
      }
          <EmojiPicker isVisible={showModal} onClose={closeModal}>
            <EmojiList onSelect={selectEmojis} onCloseModal={closeModal} />
          </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globals.backgroundDefault,
    alignItems: 'center',
    paddingTop: 15,
  },
  imageContainer: {
    marginBottom: 30
    // flex: 1,
    // width: 320,
    // height: 440,
  },
  btnContainer: {
    flex: 1/3,
    alignItems: 'center',
    gap: 20
  },
  modalContainer: {
    position: 'absolute',
    bottom: 80,
  },
  modalRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 50,
  }

})
