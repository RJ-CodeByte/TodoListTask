import {StyleSheet} from 'react-native';

import {AppColors, AppConstants, AppSpacing} from '../../constants';

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
    backgroundColor: AppColors.blueFF,
    gap: AppSpacing[8],
    paddingVertical:
      AppConstants.PLATFORM_OS === 'android' ? AppSpacing[15] : AppSpacing[18],
    paddingHorizontal: AppSpacing[24],
    borderRadius: AppSpacing[12],
  },
  containerDisabled: {
    opacity: 0.3,
  },
  separator: {
    height: 0.5,
    marginVertical: AppSpacing[10],
    backgroundColor: AppColors.gray40,
  },
  listContainer: {
    paddingTop: AppSpacing[30],
    paddingHorizontal: AppSpacing[20],
  },
});

export default styles;
