import React, { memo } from 'react';
import { Text } from 'react-native-elements';
import styles from './styles'
import { View } from 'react-native';
import Carousel from '../../../components/swipers/template-2';
import { IMG_CAROUSEL } from './data';

type Props = {
  //
};

const Achievement: React.FC<Props> = () => {
  return (
    <>
      <Text style={styles.title}>
        Thành tựu của chúng tôi
      </Text>

      <View style={styles.card}>
        <Carousel images={IMG_CAROUSEL} />
      </View>
    </>
  );
};

export default memo(Achievement);
