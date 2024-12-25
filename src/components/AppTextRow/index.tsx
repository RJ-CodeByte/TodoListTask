import React, {memo, useMemo} from 'react';
import {TextStyle, View} from 'react-native';

import {AppText} from '../../components';
import {AppColors, AppFontSizes} from '../../constants';

import {styles} from './styles';
interface AppTextRowProps {
  title: string;
  subTitle?: string;
  children?: React.JSX.Element;
  isColumn?: boolean;
  titleFontColor?: string;
  titleFontSize?: number;
  titleFontFamily?: string;
  subTitleFontColor?: string;
  subTitleFontSize?: number;
  subTitleFontFamily?: string;
  subTitleContainerStyle?: TextStyle;
}

/* This code snippet defines a functional component named `AppTextRow` using React's `memo` for
performance optimization. The component takes in props of type `AppTextRowProps` which include
various optional properties like `title`, `subTitle`, `children`, and styling related props. */
export const AppTextRow = memo((props: AppTextRowProps) => {
  const {
    title,
    subTitle,
    children,
    isColumn,
    titleFontColor,
    titleFontFamily,
    titleFontSize,
    subTitleFontColor,
    subTitleFontSize,
    subTitleFontFamily,
    subTitleContainerStyle,
  } = props;
  const titleTextColor = useMemo(() => {
    return titleFontColor ?? AppColors.black;
  }, [titleFontColor]);

  const titleTextSize = useMemo(() => {
    return titleFontSize ?? AppFontSizes[18];
  }, [titleFontSize]);


  const subTitleTextColor = useMemo(() => {
    return subTitleFontColor ?? AppColors.black;
  }, [subTitleFontColor]);

  const subTitleTextSize = useMemo(() => {
    return subTitleFontSize ?? AppFontSizes[18];
  }, [subTitleFontSize]);


  return (
    <View style={isColumn ? undefined : styles.serviceItemContainer}>
      <AppText
        text={title}
        fontSize={titleTextSize}
        fontColor={titleTextColor}
        containerStyle={styles.titleStyle}
      />

      {children ?? (
        <AppText
          text={subTitle ?? ''}
          fontSize={subTitleTextSize}
          fontColor={subTitleTextColor}
          containerStyle={[styles.subtitleStyle, subTitleContainerStyle ?? {}]}
        />
      )}
    </View>
  );
});
