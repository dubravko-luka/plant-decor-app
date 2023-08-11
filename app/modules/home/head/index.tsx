import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';


type Props = {
  //
};

const Head: React.FC<Props> = () => {
  return (
    <>
      <Text style={styles.hello}>Xin chào,</Text>
      <Text style={styles.goodMorning}>Chúc bạn một ngày mới tốt lành</Text>
    </>
  );
};

export default memo(Head);

const styles = StyleSheet.create({
  hello: {
    fontSize: 14,
    fontWeight: '400'
  },
  goodMorning: {
    fontSize: 16,
    fontWeight: '700'
  }
});
