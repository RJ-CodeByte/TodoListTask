import React, {memo, PropsWithChildren, useCallback, useMemo} from 'react';
import {Linking, Text, TextProps, type TextStyle} from 'react-native';


import {AppColors, AppFontSizes} from '../../constants';


/**
 * Defines the props for the AppText component, which extends TextProps with additional properties.
 */
type AppTextProps = PropsWithChildren<TextProps> & {
  fontFamily?: string;
  fontSize?: number;
  fontColor?: string;
  containerStyle?: TextStyle[] | TextStyle;
  text: string;
  children?: React.ReactNode;
};

/**
 * Represents a memoized text component with customizable font properties.
 * @param {AppTextProps} props - Component props.
 * @returns {JSX.Element} - React element.
 * @exports AppText - Memoized text component.
 */
export const AppText = memo((props: AppTextProps) => {
  const {
    fontSize,
    fontColor,
    containerStyle,
    text,
    fontFamily,
    children = <></>,
  } = props;

  const localStyle: TextStyle = useMemo(() => {
    const fontStyles: TextStyle = {
      fontWeight: '400',
    };

   

    return {
      fontSize: fontSize ?? AppFontSizes[18],
      color: fontColor ?? AppColors.black,
      ...fontStyles,
    };
  }, [fontFamily, fontSize, fontColor]);




  return  <Text style={[localStyle, containerStyle]} {...props}>
      {text}
      {children}
    </Text>
  
});
