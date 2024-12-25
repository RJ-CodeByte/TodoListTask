import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {AppText, AppTouchable} from '../../../../components';
import {
  AppColors,
  AppConstants,
  AppFontSizes,
  AppSpacing,
} from '../../../../constants';

interface TabItemProps {
  isActive: boolean;
  activeIcon: React.FC<SvgProps>;
  inActiveIcon: React.FC<SvgProps>;
  text: string;
  onPress: () => void;
}
/*
  TabItem represents a sun component item of tab bar components
 */
export const TabItem = memo((props: TabItemProps) => {
  const {isActive, text, onPress} = props;
  return (
    <AppTouchable onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
      </View>
      <AppText
        fontColor={isActive ? AppColors.green99 : AppColors.gray88}
        fontSize={AppFontSizes[12]}
        text={text}
        numberOfLines={1}
        containerStyle={styles.text}
      />
    </AppTouchable>
  );
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap:
      AppConstants.PLATFORM_OS === 'android' ? AppSpacing[5] : AppSpacing[7],
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    letterSpacing: 0.4,
  },
});
