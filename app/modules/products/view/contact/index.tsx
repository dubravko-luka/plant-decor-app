import React, { memo } from 'react';
import { Text, View, Linking, TouchableOpacity } from 'react-native';
import styles from './styles'

type Props = {
  //
};

const Contact: React.FC<Props> = () => {

  const makePhoneCall = () => {
    const phoneNumber = '0123456789';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const openZaloApp = () => {
    Linking.openURL('zalo://chat?phone=84929664272');
  };

  const openEmailApp = async () => {
    Linking.openURL('mailto:vuontrongnha@gmail.com');
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.items}>
          <Text style={styles.title}>Zalo</Text>
          <TouchableOpacity onPress={openZaloApp}>
            <Text style={styles.value}>Anh Long Trần</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.items}>
          <Text style={styles.title}>Di động</Text>
          <TouchableOpacity onPress={makePhoneCall}>
            <Text style={styles.value}>092.966.4272</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.items}>
          <Text style={styles.title}>Email</Text>
          <TouchableOpacity onPress={openEmailApp}>
            <Text style={styles.value}>vuontrongnha@gmail.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default memo(Contact);
