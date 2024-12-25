import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppButton } from '../../components';
import { AppColors, AppSpacing } from '../../constants';


import { styles } from './styles';

interface SearchBarProps {
  children: JSX.Element;
  onCancelPress: () => void;
}

/* This code snippet is defining a functional component named `SearchBar` in TypeScript React. Here's a
breakdown of what the code is doing: */
export const SearchBar = memo((props: SearchBarProps) => {
  const {children,onCancelPress} = props;

  const {top} = useSafeAreaInsets();
  const {canGoBack, goBack} =
    useNavigation<NavigationProp<MainStackParamList>>();

  const onCancelHandler = useCallback(() => {
    if (onCancelPress) {
      onCancelPress?.();
    }
  }, [onCancelPress]);

  return (
    <View
      style={[
        styles.container,
        {marginTop: top !== 0 ? undefined : AppSpacing[15]},
      ]}>
      <View style={styles.subContainer}>{children}</View>
      <AppButton
        text={'Cancel'}
        onPress={onCancelHandler}
        textColor={AppColors.black}
        containerStyle={styles.buttonStyle}
      />
    </View>
  );
});
