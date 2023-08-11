import React, { memo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Padding } from '../../../styles';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import DetailProductContainer from '../../../modules/products/view'

type Props = {
  route?: any
};

const Product: React.FC<Props> = ({ route }) => {

  const navigation = useNavigation()

  return (
    <>
      <SafeAreaView style={styles.contain}>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Icon
              name="angle-left"
              color="black"
              size={24}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
              <View style={{ padding: Padding.main, flex: 1 }}>
                <DetailProductContainer />
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default memo(Product);
