import React, { memo } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles'
import { Divider } from 'react-native-elements';
import { Color } from '../../styles';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { NavigationHookType } from '../../types';

type ImgItem = {
  src: string,
  name: string,
  description: string,
}

type Props = {
  item: ImgItem,
};

const Intro: React.FC<Props> = ({ item }) => {

  const navigation: NavigationHookType = useNavigation();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate(
          "ProductDetail",
          {
            id: 1
          }
        )
      }}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <FastImage
              source={{ uri: item.src }}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>
              {item?.name}
            </Text>
            <Divider
              insetType="middle"
              style={{ marginVertical: 10 }}
              inset={true}
              color={Color?.greenMain}
              width={2}
            />
            <Text style={styles.description}>
              {item?.description}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default memo(Intro);
