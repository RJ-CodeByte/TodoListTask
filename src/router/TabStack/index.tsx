import React from 'react';
import {StatusBar} from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {AppColors, AppScreens} from '../../constants';
import {
  HomeScreen,
  ProfileScreen,
} from '../../screens';

import {TabContent} from './components/TabContent';

const Tab = createBottomTabNavigator<TabStackParamList>();

/**
 * Represents the main navigator of the application.
 * @returns {JSX.Element} - React element.
 *
 * @exports TabStack - Main navigator component.
 */
export const TabStack = (): React.JSX.Element => {
  const renderTabBar = (props: BottomTabBarProps) => {
    return <TabContent navigationProps={props} />;
  };

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={false}
        animated={true}
        backgroundColor={AppColors.black0D}
      />
      <Tab.Navigator
        tabBar={renderTabBar}
        screenOptions={{
          animation: 'shift',
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen name={AppScreens.HomeScreen} component={HomeScreen} />
        <Tab.Screen name={AppScreens.ProfileScreen} component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};
