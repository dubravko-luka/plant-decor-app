import React, { memo } from 'react';
import styles from './styles'
import { View } from 'react-native';
import { IMG_CAROUSEL } from './data';
import Product from '../../components/product';

type Props = {
  //
};

const ProductList: React.FC<Props> = () => {
  return (
    <>
      <View style={styles.card}>
        {
          IMG_CAROUSEL?.map((item, index) => (
            <View key={index} style={styles.product}>
              <Product item={item} />
            </View>
          ))
        }
      </View>
    </>
  );
};

export default memo(ProductList);
