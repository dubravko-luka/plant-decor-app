import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles'
import FastImage from 'react-native-fast-image';

type Props = {
  images: string[],
  options?: any
}

const ImageCarousel: React.FC<Props> = (props) => {

  const { images, options } = props;

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={false}
        {...options}
      >
        {images.map((url, index) => (
          <View style={styles.slide} key={index}>
            <FastImage
              source={{ uri: url }}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default ImageCarousel;
