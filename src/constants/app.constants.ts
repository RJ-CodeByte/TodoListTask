import {Platform} from 'react-native';

import {AppSpacing} from './app.spacing';

export const AppConstants = {
  IS_LOG_ENABLE: true,
  BOTTOM_SPACE: AppSpacing[16],
  MODEL_DELAY: 600,
  PAGE_LIST_SIZE: 20,
  ON_END_REACHED_THRESHOLD: 0.3,
  PLATFORM_OS: Platform.OS,
  NOTIFICATION_CHANNEL_ID: 'NOTIFICATION_CHANNEL_ID',
  PHOTO_COMPRESS_QUALITY: 0.8,
  GALLERY_MEDIA_COMPRESS_QUALITY: 0.8,
  SPLASH_DELAY: 800,
  MAX_TWO_SELECTION: 2,
  // IMG_URL:
  //   'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', // TODO: removed once api is integrated
  IMG_URL:
    'https://img.freepik.com/free-photo/young-beautiful-african-woman-student-resting-relaxing-sitting-cafe-smiling-drinking-coffee_176420-12331.jpg?semt=ais_hybrid',
  DEBOUNCE_DELAY: 400,
  
};

export const dropDownFormatData = (list: string[]) => {
  return list.map((item, _) => {
    return {value: item, label: item};
  });
};


export const SECRET_KEY = "MY_SECRET_KEY_FROM_ENV";