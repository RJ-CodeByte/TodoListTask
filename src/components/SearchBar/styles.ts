import {StyleSheet} from 'react-native';

import {AppColors, AppSpacing} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: AppSpacing[20],
    gap: AppSpacing[10],
  },
  subContainer: {
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: AppColors.white,
    paddingHorizontal: 0,
  },
});
