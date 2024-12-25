import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppScreens} from '../../constants';
import {
  LoginScreen,
} from '../../screens';

import {useAuthStackController} from './controller';

// Create a native stack navigator for the auth stack
const Stack = createNativeStackNavigator<AuthStackParamList>();

/**
 * Represents the auth stack of the application.
 * @returns {JSX.Element} - React element.
 *
 * @exports AuthStack - Auth stack component.
 */
export const AuthStack = (): React.JSX.Element => {
  const {} = useAuthStackController();

  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen name={AppScreens.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
};
