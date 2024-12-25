import Snackbar from 'react-native-snackbar';

import {AppColors, AppConstants} from '../constants';

/*
  show Snack bar common function for validate with string value
*/
export const showSnackbar = (message: string) => {
  if (typeof message === 'string') {
    setTimeout(() => {
      Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_LONG,
        textColor: AppColors.white,
        backgroundColor: AppColors.blueFF,
      });
    }, AppConstants.MODEL_DELAY);
  }
};
