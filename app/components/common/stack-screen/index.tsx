import React, { memo, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../../views/SplashScreen';
import TabNavigator from '../tab-navigator';
import { SCREEN_CONFIG } from './config';

const RootStack = createStackNavigator();
const Stack = createNativeStackNavigator();

type Props = {
  //
};

const Menu: React.FC<Props> = () => {

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  const screenOptions = {
    headerShown: false,
  }

  return (
    <>
      <NavigationContainer>
        {
          loading
            ? (
              <RootStack.Navigator>
                <RootStack.Screen
                  name="SplashScreen"
                  component={SplashScreen}
                  options={{
                    headerShown: false,
                  }}
                />
              </RootStack.Navigator>
            ) : (
              <Stack.Navigator>
                <Stack.Screen name="MainTab" component={TabNavigator} options={{ headerShown: false }} />
                {
                  SCREEN_CONFIG?.map((item, index) => (
                    <Stack.Screen
                      key={index}
                      name={item?.nameEn}
                      component={item?.component}
                      options={{
                        ...screenOptions,
                      }}
                    />
                  ))
                }
              </Stack.Navigator>
            )
        }
      </NavigationContainer >
    </>
  );
};

export default memo(Menu);
