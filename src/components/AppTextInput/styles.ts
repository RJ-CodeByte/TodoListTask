import {StyleSheet} from 'react-native';

import {
  AppBorderWidth,
  AppColors,
  AppRadius,
  AppSpacing,
} from '../../constants';

export const styles = StyleSheet.create({
  container: {

  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderRadius: AppRadius[38],
    borderColor: AppColors.gray34,
    borderWidth: AppBorderWidth[1],
    
  },
  errorTextStyle: {
    marginTop: AppSpacing[6],
  },
  inputStyle: {
    flex: 1,
    fontSize: AppSpacing[14],
    color: AppColors.black,
    paddingVertical: AppSpacing[15],
    paddingHorizontal: AppSpacing[15],
    letterSpacing: 0.5,
  },
  eyeButton: {
    paddingVertical: AppSpacing[10],
    paddingHorizontal: AppSpacing[15],
  },
});
