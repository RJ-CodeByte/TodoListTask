import {StyleSheet} from 'react-native';

import {AppColors, AppSpacing} from '../../constants';

/**
 * Stylesheet for the AppButton component.
 *
 * @exports styles - Stylesheet for the AppButton component.
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: AppSpacing[55],
    backgroundColor: AppColors.white,
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
  },
  leftButton: {
    height: '100%',
    width: AppSpacing[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButton: {
    height: '100%',
    width: AppSpacing[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
  redDot: {
    height: AppSpacing[10],
    width: AppSpacing[10],
    backgroundColor: AppColors.red01,
    borderRadius: AppSpacing[10],
    position: 'absolute',
    zIndex: 1,
    right: AppSpacing[12],
    top: AppSpacing[10],
  },
});

export default styles;
