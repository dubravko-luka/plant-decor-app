import React, { memo } from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

type Props = {
  //
};

const Overview: React.FC<Props> = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.items}>
          <Text style={styles.title}>Chủ đầu tư</Text>
          <Text style={styles.value}>Chị Hoa</Text>
        </View>

        <View style={styles.items}>
          <Text style={styles.title}>Vị trí</Text>
          <Text style={styles.value}>Quận 1</Text>
        </View>

        <View style={styles.items}>
          <Text style={styles.title}>Hạng mục</Text>
          <Text style={styles.value}>Spa</Text>
        </View>

        <View style={styles.items}>
          <Text style={styles.title}>Phong cách</Text>
          <Text style={styles.value}>USA</Text>
        </View>

        <View style={styles.items}>
          <Text style={styles.title}>Thi công</Text>
          <Text style={styles.value}>Vườn Trong Nhà</Text>
        </View>
      </View>
    </>
  );
};

export default memo(Overview);
