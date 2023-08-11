import React, { memo } from 'react';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Linking, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  //
};

const ContactContainer: React.FC<Props> = () => {

  const makePhoneCall = () => {
    const phoneNumber = '0123456789';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>VƯỜN TRONG NHÀ</Text>
          <Text style={styles.description}>- Địa chỉ: Số 01, Đường 05, Phường Hiệp Bình Phước, Quận Thủ Đức, Tp.HCM</Text>
          <TouchableOpacity onPress={makePhoneCall}>
            <Text style={styles.description}>- Điện thoại: 092 966 4272</Text>
          </TouchableOpacity>
          <Text style={styles.description}>- Email: vuontrongnha@gmail.com</Text>
          <Text style={styles.description}>- Chuyên tư vấn, thiết kế - thi công các công trình về: Cảnh quan, Sân vườn, Hồ cá Koi, Đài phun nước, Sân vườn cafe…</Text>
          <TouchableOpacity onPress={makePhoneCall}>
            <View style={styles.buttonCall}>
              <Text style={styles.callText}>
                <Icon size={16} name='phone' />
                <Text>  HOTLINE: 092.966.4272</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default memo(ContactContainer);
