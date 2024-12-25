import {StyleSheet} from 'react-native';

import {AppColors, AppSpacing} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderWidth:1,
    paddingVertical:AppSpacing[10],
    borderRadius: AppSpacing[12],
  },
  inputStyle: {
    flex: 1,
    fontSize: AppSpacing[16],
    color: AppColors.black,
    padding: 0,
  },
  eyeButton: {
    paddingLeft: AppSpacing[12],
    paddingRight: AppSpacing[8],
  },
});
