import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

import {AppColors, AppFontSizes, AppSpacing} from '../../constants';
import {IcRadioSelected, IcRadioUnSelected} from '../../constants';

import {AppText} from '../AppText';
import {AppTouchable} from '../AppTouchable';

interface AppRadioButtonProps {
  isSelected: boolean;
  labelText?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const AppRadioButton = memo((props: AppRadioButtonProps) => {
  const {labelText, isSelected, onPress} = props;

  return (
    <AppTouchable disabled={!onPress} onPress={onPress} {...props}>
      <View style={styles.container}>
        {isSelected ? <IcRadioSelected /> : <IcRadioUnSelected />}
        {labelText && (
          <AppText
            text={labelText}
            fontColor={AppColors.black}
            fontSize={AppFontSizes[16]}
          />
        )}
      </View>
    </AppTouchable>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: AppSpacing[12],
  },
});
