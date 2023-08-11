import React, { memo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Padding } from '../../../styles';
import Products from '../../../modules/products';

type Props = {
  //
};

const Product: React.FC<Props> = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: Padding.main }}>
            <Products />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(Product);
