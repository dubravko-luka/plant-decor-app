// Slider Card

import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles'
import Card from '../../product';

type ImgItem = {
  src: string,
  name: string,
  description: string,
}

type Props = {
  images?: ImgItem[],
  options?: any
}

const ImageCarousel: React.FC<Props> = (props) => {

  const { images, options } = props;

  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={false}
        {...options}
      >
        {images?.map((url, index) => (
          <Card item={url} key={index} />
        ))}
      </Swiper>
    </View>
  );
};

export default ImageCarousel;