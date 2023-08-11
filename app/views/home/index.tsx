import React, { memo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Head from '../../modules/home/head';
import { Padding } from '../../styles';
import ImageCarousel from '../../components/swipers/template';
import { IMG_CAROUSEL } from './data';
import Intro from '../../modules/home/intro';
import Achievement from '../../modules/home/achievement';
import Question from '../../modules/home/question';

type Props = {
  //
};

const Home: React.FC<Props> = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: Padding.main }}>
            <Head />
            <View style={{ paddingTop: 10 }}>
              <ImageCarousel images={IMG_CAROUSEL} />
            </View>
            <View style={{ paddingTop: 30 }}>
              <Intro />
            </View>
            <View style={{ paddingTop: 30 }}>
              <Achievement />
            </View>
            <View style={{ paddingTop: 30 }}>
              <Question />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(Home);
