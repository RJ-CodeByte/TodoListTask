import React, {ForwardedRef, forwardRef, memo} from 'react';
import {TextInput, TextInputProps, TextStyle, View, ViewStyle} from 'react-native';

import {SvgProps} from 'react-native-svg';

import {AppSvgButton} from '../../components';
import {AppColors, IcCircleClose} from '../../constants';

import {styles} from './styles';

interface SearchTextInputProps {
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;
  rightIconEnabled?: boolean;
  inputProps?: TextInputProps;
  clearIconEnabled?: boolean;
  clearIconPress?: () => void;
  leftIconPress?: () => void;
  rightIconPress?: () => void;
}

// design for making  password visible or invisible when user clicks on the icon , title label on top and error text on bottom.

/* The `export const SearchTextInput` function is a React component that creates a customizable text input
field. Here's a breakdown of what it does: */
export const SearchTextInput = memo(
  forwardRef((props: SearchTextInputProps, ref: ForwardedRef<TextInput>) => {
    const {
      containerStyle,
      leftIcon,
      rightIcon,
      inputStyle,
      inputProps,
      rightIconEnabled = false,
      clearIconEnabled = false,
      clearIconPress = () => {},
      leftIconPress = () => {},
      rightIconPress = () => {},
    } = props;
    return (
      <View style={[styles.container, containerStyle]}>
        {leftIcon && (
          <AppSvgButton
            icon={leftIcon}
            containerStyle={styles.eyeButton}
            onPress={leftIconPress}
          />
        )}

        <TextInput
          ref={ref}
          autoCorrect={false}
          placeholderTextColor={AppColors.greyE8}
          style={[styles.inputStyle, inputStyle]}
          blurOnSubmit={false}
          {...inputProps}
        />

        {clearIconEnabled && (
          <AppSvgButton
            icon={IcCircleClose}
            containerStyle={styles.eyeButton}
            onPress={clearIconPress}
          />
        )}

        {rightIcon && rightIconEnabled && (
          <AppSvgButton
            icon={rightIcon}
            containerStyle={styles.eyeButton}
            onPress={rightIconPress}
          />
        )}
      </View>
    );
  }),
);
