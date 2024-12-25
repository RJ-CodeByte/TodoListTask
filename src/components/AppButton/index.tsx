import React, {memo, PropsWithChildren, useCallback, useMemo} from 'react';
import {TextStyle, TouchableOpacityProps, View, ViewStyle} from 'react-native';


import {AppText, AppTouchable} from '../../components';
import {AppColors, AppFontSizes} from '../../constants';

import styles from './styles';

/**
 * Defines the props for the AppButton component, which extends TouchableOpacityProps with additional properties.
 */
type AppButtonProps = PropsWithChildren<TouchableOpacityProps> & {
  text: string;
  textColor?: string;
  textSize?: number;
  isDisableOpacity?: boolean;
  textFontFamily?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle[] | TextStyle;
  rightIconContainerStyle?: ViewStyle | ViewStyle[];
  leftIconContainerStyle?: ViewStyle | ViewStyle[];
};

/**
 * Represents a memoized button component, which utilizes TouchableOpacity and SVG components.
 * @param {AppButtonProps} props - Component props.
 * @returns {JSX.Element} - React element.
 */
export const AppButton = memo((props: AppButtonProps): React.JSX.Element => {
  const {
    text,
    containerStyle,
    textStyle,
    rightIconContainerStyle,
    leftIconContainerStyle,
    textFontFamily: fontFamily,
    textColor: fontColor,
    textSize: fontSize,
    isDisableOpacity,
  } = props;

  const textColor = useMemo(() => {
    return fontColor ?? AppColors.white;
  }, [fontColor]);

  const textSize = useMemo(() => {
    return fontSize ?? AppFontSizes[17];
  }, [fontSize]);

 

  const disableOpacity = useMemo(() => {
    if (isDisableOpacity) {
      return {
        backgroundColor: isDisableOpacity ? AppColors.blueFF + 30 : undefined,
      };
    } else {
      return {};
    }
  }, [isDisableOpacity]);


  return (
    <AppTouchable
      style={[styles.container, disableOpacity, containerStyle]}
      {...props}>
      <AppText
        text={text}
        fontSize={textSize}
        fontColor={textColor}
        containerStyle={textStyle}
      />
    </AppTouchable>
  );
});
