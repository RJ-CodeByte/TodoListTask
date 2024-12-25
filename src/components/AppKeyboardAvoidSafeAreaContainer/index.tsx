import React, {memo, Ref} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  RefreshControlProps,
  ScrollView,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {AppSpacing} from '../../constants';

import {AppSafeAreaContainer} from '../AppSafeAreaContainer';

import styles from './styles';

interface IAppKeyboardAvoidSafeAreaContainer {
  refreshControl?: React.ReactElement<RefreshControlProps> | undefined;
  keyboardAvoidViewStyle?: ViewStyle;
  safeAreaContainerStyle?: ViewStyle;
  scrollViewStyle?: ViewStyle;
  keyboardShouldPersistTaps?: boolean | 'always' | 'never' | 'handled';
  scrollChildren?: React.JSX.Element;
  children?: React.JSX.Element;
  headerChildren?: React.JSX.Element;
  showsVerticalScrollIndicator?: boolean;
  scrollRef?: Ref<ScrollView>;
  testID?: string;
}

// common component that manage keyboard avoiding issue for both platform.
// headerChildren prop for where you need to put your header component.
// scrollChildren prop for where you need to put your TextInput component and other which need to be in scroll
// children props for the bottom of your screen like submit button or component which should be in keyboard avoid view.

export const AppKeyboardAvoidSafeAreaContainer = memo(
  (props: IAppKeyboardAvoidSafeAreaContainer) => {
    const {
      refreshControl,
      keyboardAvoidViewStyle,
      safeAreaContainerStyle,
      keyboardShouldPersistTaps = 'handled',
      scrollViewStyle,
      headerChildren = <></>,
      children = <></>,
      scrollChildren,
      showsVerticalScrollIndicator = false,
      scrollRef,
      testID,
    } = props;

    const {bottom} = useSafeAreaInsets();

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? undefined : 'padding'}
        style={[styles.container, keyboardAvoidViewStyle]}
        testID={testID}>
        <AppSafeAreaContainer containerStyle={safeAreaContainerStyle}>
          {headerChildren}
          {scrollChildren ? (
            <ScrollView
              ref={scrollRef}
              refreshControl={refreshControl}
              showsVerticalScrollIndicator={showsVerticalScrollIndicator}
              keyboardShouldPersistTaps={keyboardShouldPersistTaps}
              contentContainerStyle={{paddingBottom: bottom + AppSpacing[20]}}
              style={scrollViewStyle}>
              {scrollChildren}
            </ScrollView>
          ) : (
            <></>
          )}
          {children}
        </AppSafeAreaContainer>
      </KeyboardAvoidingView>
    );
  },
);
