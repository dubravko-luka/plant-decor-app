import React, { useState } from 'react';
import { View, useWindowDimensions, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper';
import styles from './styles'
import FastImage from 'react-native-fast-image';
import { Color } from '../../../styles';

type Props = {
  images: string[],
  options?: any
}

const ImageCarousel: React.FC<Props> = (props) => {

  const { images, options } = props;

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const toggleModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        dotColor={Color.white}
        activeDotColor={Color.greenMain}
        paginationStyle={{
          bottom: 10
        }}
        {...options}
      >
        {images.map((url, index) => (
          <View style={styles.slide} key={index}>
            <TouchableOpacity key={index} onPress={() => toggleModal(index)}>
              <FastImage
                source={{ uri: url }}
                style={styles.image}
                resizeMode={FastImage.resizeMode.cover}
              />
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>
      {/*  */}
      <Modal visible={isModalVisible} transparent={true} style={{ flex: 1 }}>
        <View style={styles.modalContainer}>
          <Swiper
            style={styles.wrapper}
            index={selectedImageIndex}
            loop={true}
            showsButtons={false}
            dotColor={Color.white}
            activeDotColor={Color.greenMain}
            paginationStyle={{
              bottom: 50,
            }}
          >
            {images.map((url, index) => (
              <View style={{ flex: 1 }} key={index}>
                <FastImage
                  source={{ uri: url }}
                  style={{
                    width: windowWidth,
                    height: windowHeight,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            ))}
          </Swiper>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeModal}
              activeOpacity={1}
              delayPressIn={0}
            >
              <Icon
                name="close"
                size={25}
                color={Color.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ImageCarousel;
