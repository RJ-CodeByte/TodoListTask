import React from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {AppLoader} from '../../components';
import {AppColors} from '../../constants';

import {navigationRef} from '../../helpers';
import Loader, {ILoader} from '../../helpers/Loader';
import {AppNavigator} from '../../router';

import {useRootController} from './controller';

/**
 * Represents the root component of the application.
 * @returns {JSX.Element} - React element.
 */
export const Root = (): React.JSX.Element => {
  const {} = useRootController();

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <StatusBar
          backgroundColor={AppColors.black0D}
          animated={true}
          barStyle={'light-content'}
        />
        <AppLoader
          ref={(e: HTMLInputElement) => Loader.setLoader(e as ILoader)}
        />
        <AppNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
