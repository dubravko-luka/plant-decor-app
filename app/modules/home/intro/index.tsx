import React, { memo } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles'
import FastImage from 'react-native-fast-image';
import { NavigationHookType } from '../../../types';
import { useNavigation } from '@react-navigation/native';
type Props = {
  //
};

const Intro: React.FC<Props> = () => {

  const navigation: NavigationHookType = useNavigation()

  return (
    <>
      <Text style={styles.title}>
        ĐƠN VỊ KIẾN TRÚC "VƯỜN TRONG NHÀ"
      </Text>

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
              source={{ uri: 'https://vuontrongnha.demo-website.click/images/page-home/png/1.png' }}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.description}>
              Là đơn vị chuyên thiết kế - thi công sân vườn, cung cấp cây cảnh, chế tác hòn non bộ, thi công thác nước, thiết kế quán cafe…
            </Text>
            <Text style={styles.description}>
              "<Text style={styles.name}>Vườn trong nhà</Text>"
              tự hào mang đến khách hàng những không gian đẹp và lãng mạng nhất, tạo cảm giác thư thái cho khách hàng mỗi sáng thức dậy, hay là nơi thư giãn và nghỉ dưỡng sau những giờ làm việc mệt nhọc.
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default memo(Intro);
