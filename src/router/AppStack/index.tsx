import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppScreens} from '../../constants';

import {AuthStack} from '../AuthStack';
import {MainNavigator} from '../MainStack';

import {useAppStackController} from './controller';

// Create a native stack navigator for the App stack
const Stack = createNativeStackNavigator<AppStackParamList>();

/**
 * Represents the main navigator of the application.
 * @returns {JSX.Element} - React element.
 *
 * @exports AppNavigator - Main navigator component.
 */
export const AppNavigator = (): React.JSX.Element => {
  const {} = useAppStackController();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppScreens.AuthStack} component={AuthStack} />
      <Stack.Screen name={AppScreens.MainStack} component={MainNavigator} />
    </Stack.Navigator>
  );
};
