import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppScreens} from '../../constants';

import {TabStack} from '../TabStack';

import {useMainStackController} from './controller';
import { AddTaskScreen, EditTaskScreen } from '../../screens';

// Create a native stack navigator for the auth stack
const Stack = createNativeStackNavigator<MainStackParamList>();

/**
 * Represents the main navigator of the application.
 * @returns {JSX.Element} - React element.
 *
 * @exports MainNavigator - Main navigator component.
 */
export const MainNavigator = (): React.JSX.Element => {
  const {} = useMainStackController();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'ios_from_right'}}>
      <Stack.Screen name={AppScreens.TabStack} component={TabStack} />
      <Stack.Screen name={AppScreens.AddTaskScreen} component={AddTaskScreen} />
      <Stack.Screen name={AppScreens.EditTaskScreen} component={EditTaskScreen} />
    </Stack.Navigator>
  );
};
