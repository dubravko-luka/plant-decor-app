import React, { memo, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import styles from './styles'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import RenderHtml from 'react-native-render-html';
import { Color } from '../../../styles';
import overview from './overview';
import contact from './contact';
import { IMG_CAROUSEL, description, style } from './data';
import ImageCarousel from '../../../components/swipers/template-3';
import { Divider } from 'react-native-elements';

const initialLayout = { width: Dimensions.get('window').width };

type Props = {
  //
};

const DetailProductContainer: React.FC<Props> = () => {

  const [index, setIndex] = useState<number>(0);

  const [routes] = useState([
    { key: 'overview', title: 'Tổng Quan' },
    { key: 'contact', title: 'Liên Hệ' },
  ]);

  const renderScene = SceneMap({
    overview: overview,
    contact: contact,
  });

  const _renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor={Color?.greenMain}
      inactiveColor={'#636363'}
      indicatorStyle={{ backgroundColor: Color?.greenMain }}
      style={styles.tabBar}
      labelStyle={styles.titleTab}
      pressColor={'transparent'}
      pressOpacity={0}
    />
  );

  return (
    <>
      <View style={styles.wrapper}>
        <ImageCarousel images={IMG_CAROUSEL} />
        <View style={styles.content}>
          <Text style={styles.title}>THỰC TẾ NỘI THẤT CĂN HỘ SUNRISE SOUTH 3 PHÒNG NGỦ - CHỊ HOA</Text>
          <Divider width={0.5} color={'#acacac'} />
          <View style={[styles.tabView, { height: 250 }]}>
            <TabView
              lazy={true}
              swipeEnabled={false}
              navigationState={{ index, routes }}
              renderTabBar={_renderTabBar}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={initialLayout}
              style={styles.tabs}
            />
          </View>
          <Divider width={0.5} color={'#acacac'} />
          <View style={styles.description}>
            <Text style={styles.itemDescriptionTitle}>Phong cách</Text>
            <View style={styles.itemDescriptionValue}>
              <RenderHtml
                contentWidth={Dimensions.get('window').width}
                source={{ html: style }}
              />
            </View>
            {/*  */}
            <Text style={styles.itemDescriptionTitle}>Mô tả</Text>
            <View style={styles.itemDescriptionValue}>
              <RenderHtml
                contentWidth={Dimensions.get('window').width}
                source={{ html: description }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default memo(DetailProductContainer);