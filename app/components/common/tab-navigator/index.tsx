import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_MENU_CONFIG } from '../stack-screen/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';
import { Color } from '../../../styles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  const screenOptions = {
    headerShown: false,
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Color.black,
            paddingTop: 8,
          },
        }}
      >
        {
          SCREEN_MENU_CONFIG?.map((item, index) => (
            <Tab.Screen
              key={index}
              name={item.nameEn}
              component={item.component}
              options={{
                ...screenOptions,
                tabBarLabel: ({ color, focused }) => (
                  <Text
                    style={{
                      color: focused ? Color.greenLight : color,
                      fontSize: 9
                    }}
                  >
                    {item?.nameVi}
                  </Text>
                ),
                tabBarIcon: ({ color, size, focused }) => (
                  <Icon
                    name={item.icon}
                    size={size}
                    color={focused ? Color.greenLight : color}
                  />
                ),
              }}
            />
          ))
        }
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
