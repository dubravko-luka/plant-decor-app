import React, { memo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Padding } from '../../styles';
import ContactContainer from '../../modules/contact';

type Props = {
  //
};

const Contact: React.FC<Props> = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: Padding.main }}>
            <ContactContainer />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(Contact);
