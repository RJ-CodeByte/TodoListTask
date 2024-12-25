import React, {memo, useCallback, useMemo} from 'react';
import {View, ViewStyle} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';

import {AppText, AppTouchable} from '../../components';
import {AppColors, AppFontSizes} from '../../constants';

import styles from './styles';
import { SvgProps } from 'react-native-svg';

/**
 * Defines the props for the AppHeader component.
 * useful for custom screen headers with back button, header text and right menu icon props.
 */
type AppHeaderProps = {
  text?: string;
  textFontColor?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  isRightDisabled?: boolean;
  rightIcon?: React.FC<SvgProps>;
  isNotificationDotVisible?: boolean;
  leftIconPress?: () => void;
  rightIconPress?: () => void;
};

/**
 * Represents a AppHeader.
 * @param {AppHeaderProps} props - Component props.
 * @returns {JSX.Element} - React element.
 */
export const AppHeader = memo((props: AppHeaderProps): React.JSX.Element => {
  const {
    text,
    containerStyle,
    textFontColor,
    isNotificationDotVisible,
    isRightDisabled,
    rightIconPress,
    leftIconPress,
  } = props;

  const {canGoBack, goBack} =
    useNavigation<NavigationProp<MainStackParamList>>();

 
    const renderRightIcon = useCallback(() => {
      if (props?.rightIcon !== undefined && !isRightDisabled) {
        return <props.rightIcon />;
      } else {
        return <></>;
      }
    }, [props?.rightIcon, isRightDisabled]);


  const rightPressHandler = useCallback(() => {
    if (rightIconPress) {
      rightIconPress?.();
    }
  }, [rightIconPress]);

  const fontcolor = useMemo(() => {
    return textFontColor ?? AppColors.black;
  }, [textFontColor]);

  return (
    <View style={[styles.container, containerStyle]}>
      <AppText
        text={text ?? ''}
        fontColor={fontcolor}
        fontSize={AppFontSizes[17]}
        numberOfLines={1}
        containerStyle={styles.titleText}
      />
      <AppTouchable
        disabled={isRightDisabled}
        style={styles.rightButton}
        onPress={rightPressHandler}>
        {isNotificationDotVisible ? <View style={styles.redDot} /> : <></>}
        {renderRightIcon()}
      </AppTouchable>
    </View>
  );
});
