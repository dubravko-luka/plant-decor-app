import React, { memo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Padding } from '../../styles';
import Advises from '../../modules/advise'

type Props = {
  //
};

const Advise: React.FC<Props> = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: Padding.main }}>
            <Advises />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(Advise);
