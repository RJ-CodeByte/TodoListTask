import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';


import {AppColors, AppFontSizes} from '../../constants';

import {AppText} from '../AppText';

import {styles} from './styles';

interface AppNoDataProps {
  text?: string;
  containerStyle?: ViewStyle;
}

export const AppNoData = memo((props: AppNoDataProps) => {
  const {text, containerStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <AppText
        fontSize={AppFontSizes[14]}
        fontColor={AppColors.black}
        text={text ?? "No data Found"}
        containerStyle={styles.textContainer}
      />
    </View>
  );
});
