import React, { memo } from 'react';
import { Text, View } from 'react-native';
import styles from './styles'
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CONFIG } from './data';

type Props = {
  //
};

const Intro: React.FC<Props> = () => {
  return (
    <>
      <Text style={styles.title}>
        TẠI SAO CHỌN "VƯỜN TRONG NHÀ"? THẾ MẠNH CỦA CHÚNG TÔI LÀ GÌ ?
      </Text>
      {
        CONFIG.map((item, index) => (
          <View style={styles.wrapContent} key={index}>
            <View style={styles.infoContainer}>
              <View style={styles.icon}>
                <Icon
                  name={item?.icon}
                  size={30}
                  color={'#ae935f'}
                />
              </View>
              <Text style={styles.name}>
                {item?.nameVi}
              </Text>
              <Divider
                insetType="middle"
                style={{ marginVertical: 10 }}
                inset={true}
                color={'#ae935f'}
                width={2}

              />
              <Text style={styles.description}>
                {item?.description}
              </Text>
            </View>
            {
              index < CONFIG.length - 1
                ? (
                  <View style={styles.iconCenter}>
                    <Icon
                      name="angle-double-down"
                      size={20}
                      color={'#ae935f'}
                    />
                  </View>
                ) : (
                  <></>
                )
            }
          </View>
        ))
      }
    </>
  );
};

export default memo(Intro);
