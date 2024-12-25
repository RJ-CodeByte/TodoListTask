import React, {forwardRef, memo, useCallback, useState} from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {AppColors, AppFontSizes} from '../../constants';
import {IcEyeClose, IcEyeOpen} from '../../constants';

import {AppSvgButton} from '../AppSvgButton';
import {AppText} from '../AppText';

import {styles} from './styles';

interface AppTextInputProps extends TextInputProps {
  testID?: string;
  errorTestId?: string;
  labelText?: string;
  errorText?: string;
  isRequired?: boolean;
  containerStyle?: ViewStyle;
  isPassword?: boolean;
  subContainerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  rightIcon?: React.FC<SvgProps>;
  rightIconPress?: () => void;
}

// design for making  password visible or invisible when user clicks on the icon , title label on top and error text on bottom.

/* The `export const AppTextInput` function is a React component that creates a customizable text input
field. Here's a breakdown of what it does: */
export const AppTextInput = memo(
  forwardRef((props: AppTextInputProps, ref: React.Ref<TextInput>) => {
    const {
      testID,
      errorTestId,
      labelText,
      errorText,
      isRequired,
      containerStyle,
      subContainerStyle,
      isPassword = false,
      rightIcon,
      inputStyle,
      rightIconPress = () => {},
    } = props;

    const [secureText, setSecureText] = useState<boolean>(isPassword);

    const setSecureTextHandler = useCallback(() => {
      setSecureText(prev => !prev);
    }, []);

    return (
      <View style={[styles.container, containerStyle]}>
        {labelText && (
          <Text>
            {labelText && (
              <AppText
                text={labelText}
              
                fontSize={AppFontSizes[16]}
                fontColor={AppColors.black}
              />
            )}
            {isRequired && (
              <AppText
                text={'*'}
                fontSize={AppFontSizes[16]}
                fontColor={AppColors.black}
              />
            )}
          </Text>
        )}

        <View style={[styles.subContainer, subContainerStyle]}>
          <TextInput
            ref={ref}
            testID={testID}
            autoCorrect={false}
            placeholderTextColor={AppColors.gray88}
            style={[styles.inputStyle, inputStyle]}
            blurOnSubmit={false}
            secureTextEntry={secureText}
            {...props}
          />
          {isPassword &&
            (secureText ? (
              <AppSvgButton
                icon={IcEyeClose}
                containerStyle={styles.eyeButton}
                onPress={setSecureTextHandler}
              />
            ) : (
              <AppSvgButton
                icon={IcEyeOpen}
                containerStyle={styles.eyeButton}
                onPress={setSecureTextHandler}
              />
            ))}

          {rightIcon && (
            <AppSvgButton
              icon={rightIcon}
              containerStyle={styles.eyeButton}
              onPress={rightIconPress}
            />
          )}
        </View>

        {errorText && (
          <AppText
            testID={errorTestId}
            text={errorText}
            fontSize={AppFontSizes[14]}
            fontColor={AppColors.red45}
            containerStyle={styles.errorTextStyle}
          />
        )}
      </View>
    );
  }),
);
