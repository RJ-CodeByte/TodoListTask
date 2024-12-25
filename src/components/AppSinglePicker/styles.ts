import { StyleSheet } from 'react-native';

import { AppColors, AppConstants, AppSpacing } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    borderColor: AppColors.gray34,
    borderWidth: 1,
    borderRadius: AppSpacing[12],
    paddingVertical:
      AppConstants.PLATFORM_OS === 'android' ? AppSpacing[15] : AppSpacing[17],
  },
  dropdown: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: AppSpacing[16],
    paddingVertical: AppSpacing[10],
    gap: AppSpacing[8],
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  pickerPadding: {
    paddingHorizontal: AppSpacing[16],
    fontSize: AppSpacing[16],
    fontWeight: '400',
    color: AppColors.black,
  },
  pickerContainer: {
    marginTop: AppSpacing[15],
    marginBottom: AppSpacing[12],
    borderRadius: AppSpacing[10],
    shadowColor: AppColors.black,
    shadowOffset: {width: 0, height: AppSpacing[2]},
    shadowRadius: AppSpacing[2],
  },
  errorTextStyle: {
    flex: 1,
    marginTop: AppSpacing[6],
    textAlign: 'left',
  },
  placeHolderStyle: {
    color: AppColors.gray40,
    paddingHorizontal: AppSpacing[16],
    fontSize: AppSpacing[16],
    alignSelf: 'center',
    fontWeight: '400',
  },
});

export default styles;
