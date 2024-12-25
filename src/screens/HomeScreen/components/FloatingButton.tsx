import React from 'react';
import {StyleSheet} from 'react-native';
import {AppText, AppTouchable} from '../../../components';
import {AppColors, AppFontSizes, AppSpacing} from '../../../constants';
interface FloatingButtonProps {
  onPress: () => void;
}
const FloatingButton = (props: FloatingButtonProps) => {
  const {onPress} = props;
  return (
    <AppTouchable style={styles.bgColor} onPress={onPress}>
      <AppText
        text="+"
        fontColor={AppColors.white}
        fontSize={AppFontSizes[20]}
      />
    </AppTouchable>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: AppColors.blueFF,
    height: AppSpacing[50],
    width: AppSpacing[50],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: AppSpacing[50],
    right: AppSpacing[30],
    borderRadius: AppSpacing[25],
  },
});